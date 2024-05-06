# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.1] - 2024-04-30

### Fixed

- Fixed an issue that would break self-referencing in service classes and broken contexts when functions were isolated or used as callbacks.
- Fixed an issue that would lead to specific contexts not being logged properly in the host app.

## [0.4.0] - 2024-04-16

### Added

- Added `Config` service. This service class can be used to retrieve and merge various pieces of config. It supports hardcoded or dynamically created config objects, `VITE_` environment variables as well as injecting configuration into the global `window` object via e.g. scripts provided by NGINX.
- Added `DeviceManager` service. This service class can be used to retrieve information about the user-agent and improve responsiveness.

## [0.3.0] - 2024-03-19

### Added

- Added `sleep` function.

## [0.2.1] - 2024-03-15

### Fixed

- Fixed an issue in package.json that would make builds of consuming apps fail.

## [0.2.0] - 2024-01-17

### Added

- `Intl` now supports variables in translations.

### Chores

- TypeScript now imports the types from `@modyfi/vite-plugin-yaml/modules` and `vite`.

## [0.1.0] - 2024-01-17

### Added

- Implemented `Intl` service class that handles localization.
- Implemented `ServiceMixin` to provide easy access to singleton classes.

### Chores

- Worked on initial setup and publishing related stuff.
