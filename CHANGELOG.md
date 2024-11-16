# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - 2024-03-14

### Changed
- Moved CSS files to styles directory
- Updated import paths to reflect new structure

### Removed
- Removed unused App.tsx
- Removed INSTRUCTIONS.md (replaced by AI_GUIDELINES.md)
- Removed unused index.css

### Fixed
- Updated .gitignore to exclude dev directory

## [0.2.0] - 2024-03-14

### Added
- Comprehensive testing infrastructure with Vitest and Testing Library
- Test utilities and setup files
- Custom test renderer with user-event support
- Unit tests for components and hooks:
  - TestButton component
  - ThemeToggle component
  - useTheme hook
- Test coverage reporting
- Test UI for interactive test debugging
- Path alias support in tests

### Changed
- Updated project structure to include test directory
- Enhanced TypeScript configuration:
  - Added incremental compilation
  - Added composite project support
  - Improved path alias configuration
- Updated dependencies:
  - @testing-library/react to v14.2.1
  - Other testing-related packages to latest versions

### Fixed
- Path alias resolution in test environment
- Theme toggle component test stability
- Button variant class application

## [0.1.0] - 2024-03-13

### Added
- Initial project setup with Vite and Bun
- React 18 with TypeScript support
- Tailwind CSS integration
- shadcn/ui component library
- Express.js backend setup
- Dark mode support with system theme detection
- ESLint configuration
- Basic component structure
- Path alias configuration
- Environment variable setup
- Project documentation
