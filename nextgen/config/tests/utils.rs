#![allow(dead_code)]

use schematic::{Config, ConfigError};
use starbase_sandbox::create_empty_sandbox;
use std::path::Path;

pub fn unwrap_config_result<T>(result: Result<T, ConfigError>) -> T {
    match result {
        Ok(config) => config,
        Err(error) => panic!("{}", error.to_full_string()),
    }
}

pub fn test_config<P, T, F>(path: P, callback: F) -> T
where
    P: AsRef<Path>,
    T: Config,
    F: FnOnce(&Path) -> Result<T, ConfigError>,
{
    unwrap_config_result(callback(path.as_ref()))
}

pub fn test_load_config<T, F>(file: &str, code: &str, callback: F) -> T
where
    T: Config,
    F: FnOnce(&Path) -> Result<T, ConfigError>,
{
    let sandbox = create_empty_sandbox();

    sandbox.create_file(file, code);

    unwrap_config_result(callback(sandbox.path()))
}

pub fn test_parse_config<T, F>(code: &str, callback: F) -> T
where
    T: Config,
    F: FnOnce(&str) -> Result<T, ConfigError>,
{
    unwrap_config_result(callback(code))
}
