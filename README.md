# Vite-Bun-React-Starter

A modern, full-stack TypeScript template featuring React, Vite, Bun, and ShadCN UI. This template provides a production-ready setup for building scalable web applications.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## ✨ Features

- 🚀 **Frontend**
  - React with TypeScript for type-safe code
  - Vite for lightning-fast development
  - Tailwind CSS for utility-first styling
  - ShadCN UI for beautiful, accessible components
  - Path aliases configured for clean imports

- 💪 **Backend**
  - Bun runtime for high-performance server
  - Express.js configured with TypeScript
  - CORS enabled
  - Ready for API development

- 🛠️ **Development Experience**
  - Hot Module Replacement (HMR)
  - TypeScript path aliases
  - ESLint and Prettier configured
  - Git hooks ready
  - Organized project structure

## 📋 Prerequisites

- Node.js >= 18
- Bun >= 1.0.0

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/betmoar/vite-bun-react-starter.git
cd vite-bun-react-starter

# Install frontend dependencies
cd frontend
bun install

# Start frontend development server
bun dev

# In a new terminal, start backend server
cd ../backend
bun install
bun dev
```

Visit `http://localhost:5173` to see your app.

## 📁 Project Structure

```
project-root/
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/          # Utility functions and shared logic
│   │   ├── features/     # Feature-specific components and logic
│   │   ├── hooks/        # Custom React hooks
│   │   ├── types/        # TypeScript type definitions
│   │   └── utils/        # Helper functions
│   ├── public/           # Static assets
│   ├── index.html
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   └── utils/        # Helper functions
│   └── package.json
└── README.md
```

## 🔧 Available Scripts

### Frontend

```bash
bun dev          # Start development server
bun build        # Build for production
bun preview      # Preview production build
bun lint         # Run ESLint
```

### Backend

```bash
bun dev          # Start development server with watch mode
bun start        # Start production server
bun test         # Run tests
```

## 🎨 Customizing ShadCN UI

This template includes a basic setup of ShadCN UI. To add more components:

```bash
cd frontend
bunx shadcn-ui@latest add button
bunx shadcn-ui@latest add card
# etc...
```

## 🔒 Environment Variables

1. Create `.env` files in both frontend and backend directories:

```bash
# frontend/.env
VITE_API_URL=http://localhost:3000

# backend/.env
PORT=3000
```

## 📚 Additional Documentation

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Bun Documentation](https://bun.sh)
- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev) for the incredible dev experience
- [ShadCN UI](https://ui.shadcn.com) for the beautiful components
- [Bun](https://bun.sh) for the fast runtime
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework

---

Made with ❤️ by [Your Name]