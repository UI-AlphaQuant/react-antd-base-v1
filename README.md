# 🚀 React + TS + Vite (Ant Design System)

## ℹ️ Project Stack Overview

| Category         | Technology                                             |
| :--------------- | :----------------------------------------------------- |
| Frontend         | React (v19+), TypeScript (v5)                          |
| Bundler          | Vite (v10)                                             |
| State Management | Redux Toolkit (v2)                                     |
| Routing          | React Router (v7+)                                     |
| Styling          | Ant Design (v6), Styled Components (v6)                |
| Storybook        | Component library, Dev docs (v10)                      |
| HTTP Client      | Axios                                                  |
| Multi-language   | i18next (v25)                                          |
| Code Quality     | ESLint - Flat Config (v9), Prettier (v3.8), Husky (v9) |

## 👉 Scratch Installation Guide

```bash
  # ▶️ Initial Installation
  npm create vite@latest .
  # Need to install the following packages: Y
  # Select a framework: React
  # Select a variant: TypeScript
  # Use rolldown-vite (Experimental)?: No
  # Install with npm and start now?: Yes
  npm install react-router-dom axios
  npm install @reduxjs/toolkit react-redux
  # Create: src/store/index.ts
  # Create: src/store/slice.ts

  # ▶️ Style Dependencies
  npm install styled-components
  npm install -D @types/styled-components
  npm install antd
  npm install i18next react-i18next
  npm create storybook@latest
  # Ok to proceed?: Yes
  # Do you want to install Playwright with Chromium now?: Yes (Testing Setup)

  # ▶️ ESLint & Prettier
  # Core ESLint + TypeScript > React Related Plugins > Prettier + Storybook
  npm install -D eslint@9 @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin
  npm install -D eslint-plugin-react eslint-plugin-react-hooks
  npm install -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-storybook
  # Create eslint.config.js in the project root and add ESLint configuration
  # .eslintrc.cjs is not required
  # Create a .prettierrc file in the project root and add Prettier config settings.
  # npx prettier --write .  (to fix Windows line ending issue: warning Delete `␍`)
  # npm run lint (to test errors)
  npm install --save-dev typescript @types/react @types/react-dom
  npm install globals --save-dev

  # ▶️ Husky
  npm install -D husky
  npx husky install
  echo npm run lint > .husky/pre-commit # for Windows
  # package.json > scripts > add: "prepare": "husky install"
  # .husky > pre-commit > update config settings
  # git config --global core.autocrlf true
  # git config --global core.eol lf

  # ▶️ Normalized Files (Only If Required)
  # Create file ROOT: .gitattributes
  git rm --cached -r .
  git reset --hard
  npx prettier --write .
  # npx eslint . --cache --cache-location node_modules/.cache/eslint --fix

  # ▶️ Generate React CLI (Optional)
  npm install --save-dev generate-react-cli
  # Create File: generate-react-cli.json and add config

  # ▶️ Icons - Tabler
  npm install @tabler/icons-react

  # ▶️ Testing Config
  # Jest Core Setup
  npm install --save-dev jest ts-jest jest-environment-jsdom
  # React Testing Library
  npm install --save-dev @testing-library/react
  # Jest DOM + User Events
  npm install --save-dev @testing-library/jest-dom @testing-library/user-event
  # Identity Proxy for CSS
  npm install --save-dev identity-obj-proxy
  npm install --save-dev @types/jest

  # ▶️ Dayjs
  npm install dayjs

  # ▶️ Cleaner Script (Optional)
  npm install rimraf --save-dev
  # Package json scripts > "clean": "rimraf dist node_modules tsconfig*.tsbuildinfo"
  # npm run clean
```

## Update Files & Structure

```bash
  # ▶️ Router Setup
  # src > router > AppRouter.tsx
  # src > router > ProtectedRoute.tsx
  # Create routes constant
  # Add AppRouter in App.tsx
  # ▶️ Create Folder Structure
  # src > pages
  # src > components > (Layout / Antd / Utilities)
  # src > assets > (fonts / images / svgs)
  # ▶️ Set Alias & Base URL to Fix Path Issue
  # Set baseUrl and paths in tsconfig.app.json
  # Add alias in vite.config.ts
  # ▶️ Constants & Utils
  # src > constants > (Images / Menues / Sorting / Messages / Routes / periods)
  # src > utils > (message / sorting / validation)
  # ▶️ Theme Setup
  # src > theme > (colors / antdTokens / themeContext / useTheme)
  # src > theme > styles > (globalStyles / breakpoints)
  # added ThemeContextProvider in main.tsx | ThemeToggle Component
  # ▶️ i18n for Multi language
  # src > i18n > locales > (en/fr)
  # src > i18n > (i18n / i18nProvider)
  # added I18nProvider in main.tsx | LanguageSelector Component
  # ▶️ ErrorBoundary
  # ErrorBoundary Component added in main.tsx
  # ▶️ Services (API's)
  # src > services > api > (apiClient / apiConfig / endpoints)
  # ▶️ Setup Testing (Jest / React Test Library)
  # jest.config.js in root
  # tsconfig.json > types (add)
  # package.json > scripts (add)
  # src/setupTests.ts
  # __mocks__ folder in root & src > test > (testUtils.tsx / jest.setup.ts)
  # created sample Button.test.tsx
  # Run test 'npm run test' & 'npm run test -- Button.test.tsx'
  # Update eslint.config.js
  # ▶️ Readme Files
  # ANTD_SNIPPETS.md (Useful Antd Snippets)
  # REACT_FC.md (Sample component to extend for extra props in Antd Comp)
  # THEME_GUIDE.md (Theme utilities guide)
```

## Project Scripts

```bash
  npm run dev         # Start development server
  npm run build       # Build production-ready app

  npm run lint        # Run ESLint to check code
  npm run lint:fix    # Automatically fix linting issues
  npm run format      # Run Prettier to format all files
  npm run clean       # Remove dist/build folders

  npm run test            # Run Jest tests once
  npm run test:watch      # Run Jest in watch mode (rerun tests on changes)
  npm run test:coverage   # Run Jest and generate coverage report

  npm run storybook         # Start Storybook dev server
  npm run build-storybook   # Build static Storybook site
```

## ⚠️ Important Notes

- Configure your Git user settings before committing code.
- Add a .env file in the project root for environment variables.
- Husky ensures that code is automatically linted before every commit.

## Other Info

TypeScript Configuration (Keep as Default)

- tsconfig.json | tsconfig.app.json – app config | tsconfig.node.json – tooling config

Other Changes

- App.css & index.css removed
- Update Main/App files
- APP_ANALYSIS.md file for improvements
