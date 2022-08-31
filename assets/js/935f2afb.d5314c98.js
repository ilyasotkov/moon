"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/docs/","docId":"intro"},{"type":"category","label":"Getting started","collapsed":false,"collapsible":true,"items":[{"type":"link","label":"Install moon","href":"/docs/install","docId":"install"},{"type":"link","label":"Setup workspace","href":"/docs/setup-workspace","docId":"setup-workspace"},{"type":"link","label":"Create a project","href":"/docs/create-project","docId":"create-project"},{"type":"link","label":"Create a task","href":"/docs/create-task","docId":"create-task"},{"type":"link","label":"Run a task","href":"/docs/run-task","docId":"run-task"},{"type":"link","label":"Migrate to moon","href":"/docs/migrate-to-moon","docId":"migrate-to-moon"}]},{"type":"category","label":"Guides","collapsed":false,"collapsible":true,"items":[{"type":"link","label":"Continuous integration (CI)","href":"/docs/guides/ci","docId":"guides/ci"},{"type":"link","label":"Open source usage","href":"/docs/guides/open-source","docId":"guides/open-source"},{"type":"link","label":"Profiling tasks","href":"/docs/guides/profile","docId":"guides/profile"},{"type":"link","label":"Root-level project","href":"/docs/guides/root-project","docId":"guides/root-project"},{"type":"link","label":"Sharing workspace configuration","href":"/docs/guides/sharing-config","docId":"guides/sharing-config"},{"type":"category","label":"Examples","collapsed":true,"collapsible":true,"items":[{"type":"link","label":"Astro","href":"/docs/guides/examples/astro","docId":"guides/examples/astro"},{"type":"link","label":"ESLint","href":"/docs/guides/examples/eslint","docId":"guides/examples/eslint"},{"type":"link","label":"Jest","href":"/docs/guides/examples/jest","docId":"guides/examples/jest"},{"type":"link","label":"Next.js","href":"/docs/guides/examples/next","docId":"guides/examples/next"},{"type":"link","label":"Packemon","href":"/docs/guides/examples/packemon","docId":"guides/examples/packemon"},{"type":"link","label":"Prettier","href":"/docs/guides/examples/prettier","docId":"guides/examples/prettier"},{"type":"link","label":"React","href":"/docs/guides/examples/react","docId":"guides/examples/react"},{"type":"link","label":"Remix","href":"/docs/guides/examples/remix","docId":"guides/examples/remix"},{"type":"link","label":"TypeScript","href":"/docs/guides/examples/typescript","docId":"guides/examples/typescript"},{"type":"link","label":"Vite & Vitest","href":"/docs/guides/examples/vite","docId":"guides/examples/vite"},{"type":"link","label":"Vue","href":"/docs/guides/examples/vue","docId":"guides/examples/vue"}],"href":"/docs/guides/examples"}],"href":"/docs/guides"},{"type":"category","label":"Concepts","items":[{"type":"link","label":"Cache","href":"/docs/concepts/cache","docId":"concepts/cache"},{"type":"link","label":"File groups","href":"/docs/concepts/file-group","docId":"concepts/file-group"},{"type":"link","label":"File patterns","href":"/docs/concepts/file-pattern","docId":"concepts/file-pattern"},{"type":"link","label":"Projects","href":"/docs/concepts/project","docId":"concepts/project"},{"type":"link","label":"Targets","href":"/docs/concepts/target","docId":"concepts/target"},{"type":"link","label":"Tasks","href":"/docs/concepts/task","docId":"concepts/task"},{"type":"link","label":"Tokens","href":"/docs/concepts/token","docId":"concepts/token"},{"type":"link","label":"Toolchain","href":"/docs/concepts/toolchain","docId":"concepts/toolchain"},{"type":"link","label":"Workspace","href":"/docs/concepts/workspace","docId":"concepts/workspace"}],"collapsed":true,"collapsible":true,"href":"/docs/concepts"},{"type":"category","label":"Config files","items":[{"type":"link","label":".moon/workspace.yml","href":"/docs/config/workspace","docId":"config/workspace"},{"type":"link","label":".moon/project.yml","href":"/docs/config/global-project","docId":"config/global-project"},{"type":"link","label":"moon.yml","href":"/docs/config/project","docId":"config/project"}],"collapsed":true,"collapsible":true,"href":"/docs/config"},{"type":"category","label":"Commands","items":[{"type":"link","label":"Overview","href":"/docs/commands/overview","docId":"commands/overview"},{"type":"link","label":"bin","href":"/docs/commands/bin","docId":"commands/bin"},{"type":"link","label":"ci","href":"/docs/commands/ci","docId":"commands/ci"},{"type":"link","label":"check","href":"/docs/commands/check","docId":"commands/check"},{"type":"link","label":"clean","href":"/docs/commands/clean","docId":"commands/clean"},{"type":"link","label":"dep-graph","href":"/docs/commands/dep-graph","docId":"commands/dep-graph"},{"type":"link","label":"init","href":"/docs/commands/init","docId":"commands/init"},{"type":"category","label":"migrate","items":[{"type":"link","label":"from-package-json","href":"/docs/commands/migrate/from-package-json","docId":"commands/migrate/from-package-json"}],"collapsed":true,"collapsible":true,"href":"/docs/commands/migrate"},{"type":"link","label":"project","href":"/docs/commands/project","docId":"commands/project"},{"type":"link","label":"project-graph","href":"/docs/commands/project-graph","docId":"commands/project-graph"},{"type":"category","label":"query","items":[{"type":"link","label":"projects","href":"/docs/commands/query/projects","docId":"commands/query/projects"},{"type":"link","label":"touched-files","href":"/docs/commands/query/touched-files","docId":"commands/query/touched-files"}],"collapsed":true,"collapsible":true,"href":"/docs/commands/query"},{"type":"link","label":"run","href":"/docs/commands/run","docId":"commands/run"},{"type":"link","label":"setup","href":"/docs/commands/setup","docId":"commands/setup"},{"type":"link","label":"sync","href":"/docs/commands/sync","docId":"commands/sync"},{"type":"link","label":"teardown","href":"/docs/commands/teardown","docId":"commands/teardown"}],"collapsed":true,"collapsible":true,"href":"/docs/commands"},{"type":"link","label":"Feature comparison","href":"/docs/comparison","docId":"comparison"},{"type":"link","label":"Terminology","href":"/docs/terminology","docId":"terminology"},{"type":"link","label":"FAQ","href":"/docs/faq","docId":"faq"},{"type":"link","label":"Changelog","href":"https://github.com/moonrepo/moon/releases"}]},"docs":{"commands/bin":{"id":"commands/bin","title":"bin","description":"The moon bin  command will return an absolute path to a tool\'s binary within the toolchain.","sidebar":"docs"},"commands/check":{"id":"commands/check","title":"check","description":"The moon check [...projects] (or moon c) command will run all","sidebar":"docs"},"commands/ci":{"id":"commands/ci","title":"ci","description":"The moon ci command is a special command that should be ran in a continuous integration (CI)","sidebar":"docs"},"commands/clean":{"id":"commands/clean","title":"clean","description":"The moon clean command will clean the current workspace by deleting stale cache. For the most","sidebar":"docs"},"commands/dep-graph":{"id":"commands/dep-graph","title":"dep-graph","description":"The moon dep-graph [target] (or moon dg) command will generate a dependency graph of all","sidebar":"docs"},"commands/init":{"id":"commands/init","title":"init","description":"The moon init [dest] command will initialize moon into a repository and scaffold config files by","sidebar":"docs"},"commands/migrate/from-package-json":{"id":"commands/migrate/from-package-json","title":"migrate from-package-json","description":"Use the moon migrate from-package-json  sub-command to migrate a project\'s package.json","sidebar":"docs"},"commands/overview":{"id":"commands/overview","title":"Overview","description":"The following options are available for all moon commands.","sidebar":"docs"},"commands/project":{"id":"commands/project","title":"project","description":"The moon project  (or moon p) command will display all available information about a","sidebar":"docs"},"commands/project-graph":{"id":"commands/project-graph","title":"project-graph","description":"The moon project-graph [name] (or moon pg) command will generate a graph of all configured","sidebar":"docs"},"commands/query/projects":{"id":"commands/query/projects","title":"query projects","description":"Use the moon query projects sub-command to query information about all projects in the project","sidebar":"docs"},"commands/query/touched-files":{"id":"commands/query/touched-files","title":"query touched-files","description":"Use the moon query touched-files sub-command to query for a list of touched files (added,","sidebar":"docs"},"commands/run":{"id":"commands/run","title":"run","description":"The moon run (or moon r) command will run one or many targets (a task","sidebar":"docs"},"commands/setup":{"id":"commands/setup","title":"setup","description":"The moon setup command can be used to setup the developer and pipeline environments. It achieves","sidebar":"docs"},"commands/sync":{"id":"commands/sync","title":"sync","description":"The moon sync command will force sync all projects in the workspace. What is syncing exactly? To","sidebar":"docs"},"commands/teardown":{"id":"commands/teardown","title":"teardown","description":"The moon teardown command, as its name infers, will teardown and clean the current environment,","sidebar":"docs"},"comparison":{"id":"comparison","title":"Feature comparison","description":"The following comparisons are not an exhaustive list of features, and may be inaccurate or out of","sidebar":"docs"},"concepts/cache":{"id":"concepts/cache","title":"Cache","description":"moon\'s able to achieve high performance and blazing speeds by implementing a cache that\'s powered by","sidebar":"docs"},"concepts/file-group":{"id":"concepts/file-group","title":"File groups","description":"File groups are a mechanism for grouping similar types of files within a project using","sidebar":"docs"},"concepts/file-pattern":{"id":"concepts/file-pattern","title":"File patterns","description":"Globs","sidebar":"docs"},"concepts/project":{"id":"concepts/project","title":"Projects","description":"A project is a library, application, package, binary, tool, etc, that contains source files, test","sidebar":"docs"},"concepts/target":{"id":"concepts/target","title":"Targets","description":"A target is an identifier that pairs a project to one of its tasks, in the","sidebar":"docs"},"concepts/task":{"id":"concepts/task","title":"Tasks","description":"Tasks are commands that are ran in the context of a project. Underneath the hood, a","sidebar":"docs"},"concepts/token":{"id":"concepts/token","title":"Tokens","description":"Tokens are variables and functions that can be used by args,","sidebar":"docs"},"concepts/toolchain":{"id":"concepts/toolchain","title":"Toolchain","description":"The toolchain is an internal layer for downloading, installing, and managing tools (languages,","sidebar":"docs"},"concepts/workspace":{"id":"concepts/workspace","title":"Workspace","description":"A workspace is a directory that contains projects, manages a toolchain,","sidebar":"docs"},"config/global-project":{"id":"config/global-project","title":".moon/project.yml","description":"The .moon/project.yml file configures file groups and tasks that are inherited by every project","sidebar":"docs"},"config/project":{"id":"config/project","title":"moon.yml","description":"The moon.yml configuration file (formerly project.yml in version <=0.9) is not required but","sidebar":"docs"},"config/workspace":{"id":"config/workspace","title":".moon/workspace.yml","description":"The .moon/workspace.yml file configures available projects and their locations, the toolchain, and","sidebar":"docs"},"create-project":{"id":"create-project","title":"Create a project","description":"With a workspace, we can now house one or many projects,","sidebar":"docs"},"create-task":{"id":"create-task","title":"Create a task","description":"The primary focus of moon is a build system, and for it to operate in any capacity, it requires","sidebar":"docs"},"faq":{"id":"faq","title":"FAQ","description":"General","sidebar":"docs"},"guides/ci":{"id":"guides/ci","title":"Continuous integration (CI)","description":"All companies and projects rely on continuous integration (CI) to ensure high quality code and to","sidebar":"docs"},"guides/examples/astro":{"id":"guides/examples/astro","title":"Astro example","description":"Astro has been prototyped in our","sidebar":"docs"},"guides/examples/eslint":{"id":"guides/examples/eslint","title":"ESLint example","description":"ESLint has been prototyped in our","sidebar":"docs"},"guides/examples/jest":{"id":"guides/examples/jest","title":"Jest example","description":"Jest has been prototyped in our","sidebar":"docs"},"guides/examples/next":{"id":"guides/examples/next","title":"Next.js example","description":"Next.js has been prototyped in our","sidebar":"docs"},"guides/examples/packemon":{"id":"guides/examples/packemon","title":"Packemon example","description":"Packemon has been prototyped in our","sidebar":"docs"},"guides/examples/prettier":{"id":"guides/examples/prettier","title":"Prettier example","description":"Prettier has been prototyped in our","sidebar":"docs"},"guides/examples/react":{"id":"guides/examples/react","title":"React example","description":"React is an application or library concern, and not a build system one, since the bundling of React","sidebar":"docs"},"guides/examples/remix":{"id":"guides/examples/remix","title":"Remix example","description":"Remix has been prototyped in our","sidebar":"docs"},"guides/examples/typescript":{"id":"guides/examples/typescript","title":"TypeScript example","description":"TypeScript has been prototyped in our","sidebar":"docs"},"guides/examples/vite":{"id":"guides/examples/vite","title":"Vite & Vitest example","description":"In this guide, you\'ll learn how to integrate Vite and","sidebar":"docs"},"guides/examples/vue":{"id":"guides/examples/vue","title":"Vue example","description":"Vue + Vite has been prototyped in our","sidebar":"docs"},"guides/open-source":{"id":"guides/open-source","title":"Open source usage","description":"Although moon was designed for large monorepos, it can also be used for open source projects,","sidebar":"docs"},"guides/profile":{"id":"guides/profile","title":"Profiling tasks","description":"Troubleshooting slow or unperformant tasks? Profile and diagnose them with ease!","sidebar":"docs"},"guides/root-project":{"id":"guides/root-project","title":"Root-level project","description":"Coming from other repositories or build systems, you may be familiar with tasks available at the","sidebar":"docs"},"guides/sharing-config":{"id":"guides/sharing-config","title":"Sharing workspace configuration","description":"For large companies, open source maintainers, and those that love reusability, more often than not","sidebar":"docs"},"install":{"id":"install","title":"Install moon","description":"The following guide can be used for adding moon to an existing repository (with incremental","sidebar":"docs"},"intro":{"id":"intro","title":"Introduction","description":"moon is a repository management, organization, orchestration, and notification tool for","sidebar":"docs"},"migrate-to-moon":{"id":"migrate-to-moon","title":"Migrate to moon","description":"Now that we\'ve talked about the workspace, projects, tasks, and more, we must talk about something","sidebar":"docs"},"run-task":{"id":"run-task","title":"Run a task","description":"Even though we\'ve created a task, it\'s not useful unless we run it, which is done","sidebar":"docs"},"setup-workspace":{"id":"setup-workspace","title":"Setup workspace","description":"Once moon has been initialized, we must setup the workspace, which is","sidebar":"docs"},"terminology":{"id":"terminology","title":"Terminology","description":"| Term                   | Description                                                                                                                                |","sidebar":"docs"}}}')}}]);