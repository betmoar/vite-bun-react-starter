# Project Initialization Guide

## Prerequisites
- Node.js >= 18.0.0
- Bun >= 1.0.0

## Step 1: Create Vite Project with React + TypeScript
```bash
# Initialize new Vite project
bunx create-vite@latest my-app --template react-ts
cd my-app

# Install dependencies
bun install
```

## Step 2: Install and Configure Tailwind CSS
```bash
# Install Tailwind and its peer dependencies
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 3: Install and Setup shadcn-ui
```bash
# Install shadcn-ui CLI
bun add -D @shadcn/ui

# Initialize shadcn-ui
bunx shadcn-ui@latest init
```

Configuration options for shadcn-ui init:
```plaintext
√ Would you like to use TypeScript (recommended)? yes
√ Which style would you like to use? › Default
√ Which color would you like to use as base color? › Slate
√ Where is your global CSS file? › src/index.css
√ Would you like to use CSS variables for colors? › yes
√ Where is your tailwind.config.js located? › tailwind.config.js
√ Configure the import alias for components: › @/components
√ Configure the import alias for utils: › @/lib/utils
√ Are you using React Server Components? › no
```

## Step 4: Add Path Aliases
Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Update `vite.config.ts`:
```typescript
import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

## Step 5: Setup Backend with Bun
```bash
# Initialize backend directory
mkdir backend
cd backend
bun init

# Install necessary dependencies
bun add express @types/express cors @types/cors
```

Create `backend/src/index.ts`:
```typescript
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## Step 6: Project Structure
```plaintext
project-root/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── utils/
│   ├── public/
│   ├── index.html
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   └── package.json
└── README.md
```

## Step 7: Add Development Scripts
Update frontend `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
```

Update backend `package.json`:
```json
{
  "scripts": {
    "dev": "bun --watch src/index.ts",
    "start": "bun src/index.ts",
    "test": "bun test"
  }
}
```

## Step 8: Initialize Git Repository
```bash
git init
```

Create `.gitignore`:
```plaintext
# Dependencies
node_modules
.pnp
.pnp.js

# Production
dist
build

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories
.idea
.vscode
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

## Next Steps
1. Install additional required dependencies based on project needs
2. Set up ESLint and Prettier configurations
3. Configure environment variables
4. Set up testing framework (Jest/Vitest)
5. Add CI/CD pipeline configuration