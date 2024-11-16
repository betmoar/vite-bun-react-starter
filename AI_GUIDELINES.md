# AI Assistant Guidelines

This document serves as a comprehensive guide for AI assistants working on this project. It outlines best practices, workflows, and documentation standards.

## Project Standards

### Component Development

1. **React Components**
   - Use functional components with TypeScript
   - Implement proper prop typing with interfaces
   - Follow the shadcn/ui component patterns
   - Include JSDoc comments for complex components
   ```tsx
   interface ButtonProps {
     /** Variant style of the button */
     variant?: "default" | "destructive" | "outline"
     /** Additional className for custom styling */
     className?: string
   }
   ```

2. **Hooks**
   - Keep hooks focused and reusable
   - Include proper cleanup in useEffect
   - Use TypeScript generics when appropriate
   - Document hook parameters and return values
   ```tsx
   /**
    * Custom hook for managing theme
    * @param initialTheme - Optional initial theme value
    * @returns ThemeConfig object with current theme and setTheme function
    */
   ```

3. **Testing**
   - Write tests for all new components and hooks
   - Follow Testing Library best practices
   - Use proper test descriptions
   - Include edge cases and error states
   ```tsx
   describe('ComponentName', () => {
     it('should render successfully', () => {})
     it('should handle edge case', () => {})
     it('should handle error state', () => {})
   })
   ```

### Documentation Workflow

1. **README Updates**
   - Update features list when adding new capabilities
   - Keep project structure current
   - Update available scripts
   - Document new environment variables
   - Add new dependencies to tech stack

2. **CHANGELOG Updates**
   - Follow [Keep a Changelog](https://keepachangelog.com/) format
   - Categories to use:
     - Added (new features)
     - Changed (changes in existing functionality)
     - Deprecated (soon-to-be removed features)
     - Removed (removed features)
     - Fixed (bug fixes)
     - Security (vulnerability fixes)
   - Include version numbers and dates
   - Link to relevant issues/PRs when applicable

3. **Code Comments**
   - Add JSDoc comments for exported functions
   - Include inline comments for complex logic
   - Document any workarounds or temporary solutions
   - Explain non-obvious design decisions

### Git Workflow

1. **Commit Messages**
   - Follow [Conventional Commits](https://www.conventionalcommits.org/)
   - Types to use:
     - feat: New feature
     - fix: Bug fix
     - docs: Documentation only
     - style: Code style changes
     - refactor: Code refactoring
     - test: Adding tests
     - chore: Maintenance tasks
   ```
   type(scope): subject

   body

   BREAKING CHANGE: description
   ```

2. **Version Bumping**
   - Major (1.0.0): Breaking changes
   - Minor (0.1.0): New features, no breaking changes
   - Patch (0.0.1): Bug fixes and minor changes

## Library Best Practices

### Vite
- Use path aliases for clean imports
- Configure environment variables properly
- Optimize build settings for production

### React
- Use proper React.memo() for optimization
- Implement proper error boundaries
- Follow React 18 best practices
- Use Strict Mode

### TypeScript
- Enable strict mode
- Use proper type imports
- Implement proper error handling
- Use utility types when appropriate

### Tailwind CSS
- Follow utility-first approach
- Use proper responsive design patterns
- Implement dark mode properly
- Use CSS variables for theming

### shadcn/ui
- Follow component installation process
- Maintain consistent styling
- Use proper variant patterns
- Implement accessibility features

### Testing (Vitest & Testing Library)
- Test user interactions
- Use proper queries
- Implement proper mocking
- Follow arrange-act-assert pattern

## Workflow Steps

### Adding New Features
1. Create feature branch
2. Implement component/feature
3. Add tests
4. Update documentation
5. Update CHANGELOG
6. Create commit
7. Submit PR

### Bug Fixes
1. Create fix branch
2. Add failing test
3. Implement fix
4. Verify tests pass
5. Update CHANGELOG
6. Create commit
7. Submit PR

### Documentation Updates
1. Review changes
2. Update README if needed
3. Update CHANGELOG
4. Create commit with docs type
5. Submit PR

### Dependency Updates
1. Review compatibility
2. Update dependencies
3. Run tests
4. Update CHANGELOG
5. Create commit with chore type
6. Submit PR

## Common Tasks

### Adding a New Component
1. Create component file with TypeScript interface
2. Implement component following shadcn/ui patterns
3. Create test file
4. Add to documentation if public API
5. Update CHANGELOG
6. Commit with feat type

### Updating Tests
1. Follow Testing Library best practices
2. Update test files
3. Verify coverage
4. Update documentation if needed
5. Update CHANGELOG
6. Commit with test type

### Updating Documentation
1. Keep README current
2. Update CHANGELOG
3. Maintain code comments
4. Update type definitions
5. Commit with docs type

## Quality Checklist

- [ ] TypeScript types are properly defined
- [ ] Tests are comprehensive
- [ ] Documentation is up to date
- [ ] CHANGELOG is updated
- [ ] Commit messages follow convention
- [ ] Code follows project standards
- [ ] Accessibility is maintained
- [ ] Performance is considered
- [ ] Security best practices are followed
