use crate::errors::ArchiveError;
use crate::helpers::prepend_name;
use moon_logger::{debug, map_list, trace};
use moon_utils::path::to_string;
use starbase_styles::color;
use starbase_utils::fs;
use std::fs::File;
use std::io;
use std::io::prelude::*;
use std::path::Path;
use zip::write::FileOptions;
use zip::{CompressionMethod, ZipArchive, ZipWriter};

const LOG_TARGET: &str = "moon:archive:zip";

fn zip_contents<P: AsRef<str>>(
    archive: &mut ZipWriter<File>,
    path: &Path,
    root: &Path,
    prefix: P,
) -> Result<(), ArchiveError> {
    let prefix = prefix.as_ref();
    let name = to_string(path.strip_prefix(root).unwrap())?;

    #[allow(unused_mut)] // windows
    let mut options = FileOptions::default().compression_method(CompressionMethod::Stored);

    if path.is_file() {
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;

            options = options.unix_permissions(path.metadata()?.permissions().mode());
        }

        trace!(target: LOG_TARGET, "Zipping file {}", color::path(path));

        archive.start_file(prepend_name(&name, prefix), options)?;
        archive.write_all(fs::read_file(path)?.as_bytes())?;

        return Ok(());
    }

    if path.is_dir() {
        archive.add_directory(name, options)?;

        for entry in fs::read_dir(path)? {
            let path = entry.path();

            zip_contents(archive, &path, root, prefix)?;
        }

        return Ok(());
    }

    Ok(())
}

#[track_caller]
pub fn zip<I: AsRef<Path>, O: AsRef<Path>>(
    input_root: I,
    files: &[String],
    output_file: O,
    base_prefix: Option<&str>,
) -> Result<(), ArchiveError> {
    let input_root = input_root.as_ref();
    let output_file = output_file.as_ref();

    debug!(
        target: LOG_TARGET,
        "Zipping archive from {} with {} to {}",
        color::path(input_root),
        map_list(files, |f| color::file(f)),
        color::path(output_file),
    );

    // Create .zip
    let zip = fs::create_file(output_file)?;

    // Add the files to the archive
    let mut archive = ZipWriter::new(zip);
    let prefix = base_prefix.unwrap_or_default();

    for file in files {
        let input_src = input_root.join(file);

        zip_contents(&mut archive, &input_src, input_root, prefix)?;
    }

    archive.finish()?;

    Ok(())
}

#[track_caller]
pub fn unzip<I: AsRef<Path>, O: AsRef<Path>>(
    input_file: I,
    output_dir: O,
    remove_prefix: Option<&str>,
) -> Result<(), ArchiveError> {
    let input_file = input_file.as_ref();
    let output_dir = output_dir.as_ref();

    debug!(
        target: LOG_TARGET,
        "Unzipping archive {} to {}",
        color::path(input_file),
        color::path(output_dir),
    );

    fs::create_dir_all(output_dir)?;

    // Open .zip file
    let zip = fs::open_file(input_file)?;

    // Unpack the archive into the output dir
    let mut archive = ZipArchive::new(zip)?;

    for i in 0..archive.len() {
        let mut file = archive.by_index(i)?;

        let mut path = match file.enclosed_name() {
            Some(path) => path.to_owned(),
            None => continue,
        };

        // Remove the prefix
        if let Some(prefix) = remove_prefix {
            if path.starts_with(prefix) {
                path = path.strip_prefix(prefix).unwrap().to_owned();
            }
        }

        let output_path = output_dir.join(&path);

        // Create parent dirs
        if let Some(parent_dir) = &output_path.parent() {
            fs::create_dir_all(parent_dir)?;
        }

        // If a folder, create the dir
        if file.is_dir() {
            fs::create_dir_all(&output_path)?;
        }

        // If a file, copy it to the output dir
        if file.is_file() {
            let mut out = fs::create_file(&output_path)?;

            io::copy(&mut file, &mut out)?;
            fs::update_perms(&output_path, file.unix_mode())?;
        }
    }

    Ok(())
}

// Uncomment when needed!
// #[track_caller]
// pub fn unzip_with_diff<I: AsRef<Path>, O: AsRef<Path>>(
//     differ: &mut TreeDiffer,
//     input_file: I,
//     output_dir: O,
//     remove_prefix: Option<&str>,
// ) -> Result<(), ArchiveError> {
//     let input_file = input_file.as_ref();
//     let output_dir = output_dir.as_ref();

//     debug!(
//         target: LOG_TARGET,
//         "Unzipping archive {} to {}",
//         color::path(input_file),
//         color::path(output_dir),
//     );

//     ensure_dir(output_dir)?;

//     // Open .zip file
//     let zip =
//         File::open(input_file).map_err(|e| map_io_to_fs_error(e, input_file.to_path_buf()))?;

//     // Unpack the archive into the output dir
//     let mut archive = ZipArchive::new(zip)?;

//     for i in 0..archive.len() {
//         let mut file = archive.by_index(i)?;

//         let mut path = match file.enclosed_name() {
//             Some(path) => path.to_owned(),
//             None => continue,
//         };

//         // Remove the prefix
//         if let Some(prefix) = remove_prefix {
//             if path.starts_with(prefix) {
//                 path = path.strip_prefix(prefix).unwrap().to_owned();
//             }
//         }

//         let output_path = output_dir.join(&path);
//         let handle_error = |e: io::Error| map_io_to_fs_error(e, output_path.to_path_buf());

//         // Create parent dirs
//         if let Some(parent_dir) = &output_path.parent() {
//             ensure_dir(parent_dir)?;
//         }

//         // If a folder, create the dir
//         if file.is_dir() {
//             ensure_dir(&output_path)?;
//         }

//         // If a file, copy it to the output dir and only
//         // unpack the file if different than destination
//         if file.is_file() && differ.should_write_source(file.size(), &mut file, &output_path)? {
//             let mut out = File::create(&output_path).map_err(handle_error)?;

//             io::copy(&mut file, &mut out).map_err(handle_error)?;

//             // Update permissions when on a nix machine
//             #[cfg(unix)]
//             {
//                 use std::os::unix::fs::PermissionsExt;

//                 if let Some(mode) = file.unix_mode() {
//                     fs::set_permissions(&output_path, fs::Permissions::from_mode(mode))
//                         .map_err(handle_error)?;
//                 }
//             }

//             differ.untrack_file(&output_path);
//         }
//     }

//     differ.remove_stale_tracked_files()?;

//     Ok(())
// }
