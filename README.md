# Vite Bun React Starter

A modern, full-stack React starter template using Vite, Bun, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Lightning fast frontend tooling
- 🔥 **Bun** - Incredibly fast JavaScript runtime and package manager
- ⚛️ **React 18** - Latest React features
- 📝 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎯 **shadcn/ui** - High-quality, accessible components
- 🔄 **Express Backend** - Robust backend API support
- 🧪 **Testing** - Comprehensive testing setup with Vitest and Testing Library
- 🛠️ **Path Aliases** - Clean import statements using @/ prefix
- 🌙 **Dark Mode** - Built-in dark mode support
- 🔍 **ESLint** - Code quality and consistency

## Prerequisites

- Node.js >= 18.0.0
- Bun >= 1.0.0

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/vite-bun-react-starter.git
cd vite-bun-react-starter

# Install frontend dependencies
bun install

# Start frontend development server
bun run dev

# In a separate terminal, install backend dependencies
cd backend
bun install

# Start backend development server
bun run dev
```

## Project Structure

```
project-root/
├── src/                   # Frontend source files
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   └── theme/        # Theme-related components
│   ├── lib/              # Utility libraries
│   ├── features/         # Feature-based modules
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── test/             # Test utilities and setup
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Helper functions
├── backend/              # Backend source files
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Express middleware
│   │   └── utils/        # Backend utilities
│   └── package.json      # Backend dependencies
└── public/               # Static assets
```

## Available Scripts

Frontend:
```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run tests
bun run test

# Run tests with UI
bun run test:ui

# Generate test coverage
bun run test:coverage
```

Backend:
```bash
# Start development server with hot reload
bun run dev

# Start production server
bun run start
```

## Testing

The project uses Vitest and Testing Library for testing:

- **Unit Tests**: Test individual components and hooks
- **Integration Tests**: Test component interactions
- **Custom Test Utils**: Wrapper for consistent test setup
- **Coverage Reports**: Track test coverage

Run tests:
```bash
# Run tests in watch mode
bun run test

# Run tests with UI
bun run test:ui

# Generate coverage report
bun run test:coverage
```

## Adding shadcn/ui Components

```bash
# Add a new component
bun x --bun shadcn@latest add button

# Available components at: https://ui.shadcn.com/docs/components/accordion
```

## Environment Variables

Create a `.env` file in the project root:

```env
# Frontend
VITE_API_URL=http://localhost:3000

# Backend
PORT=3000
```

## Path Aliases

Import using the `@/` prefix:

```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Tech Stack

- [Vite](https://vitejs.dev/) - Frontend build tool
- [Bun](https://bun.sh/) - JavaScript runtime & package manager
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Express](https://expressjs.com/) - Backend framework
- [Vitest](https://vitest.dev/) - Testing framework
- [Testing Library](https://testing-library.com/) - Testing utilities

## Development

1. Frontend runs on `http://localhost:5173`
2. Backend runs on `http://localhost:3000`
3. API endpoint examples:
   - Health check: `GET http://localhost:3000/health`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [Bun](https://bun.sh/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
