# AnalytiQ — Simple Dashboard

A modern analytics dashboard built with **React 19** and **Vite**, providing rich data visualizations and user management capabilities powered by the [DummyJSON API](https://dummyjson.com).

---

## 🚀 Features

- 🔐 **Authentication** — JWT-based login with protected routes; credentials come from DummyJSON's auth endpoint
- 📊 **Interactive Charts** — Bar, Line, Pie, Stacked Bar, and Sparkline charts (via Recharts) with real-time filtering
- 🧮 **Stat Cards** — At-a-glance totals for users, products, and gender breakdown
- 🔍 **Chart Search & Pagination** — Find specific charts instantly; browse 4 charts per page
- 🗂️ **User Management Table** — Sortable, searchable paginated user list with add/delete support
- 👤 **User Profile & Detail pages** — View the logged-in user's profile and drill into any individual user
- 🌗 **Light / Dark Theme** — System-wide theme toggle via React Context
- 💀 **Skeleton Loaders** — Graceful loading states for charts, tables, filter bars, and stat cards
- 🛡️ **Error Boundary** — Global error fallback UI using `react-error-boundary`
- ✅ **Form Validation** — Add-user form backed by `react-hook-form` + `zod` schema validation
- 🧪 **Unit Tests** — Jest + React Testing Library tests for components and API helpers

---

## 🛠️ Tech Stack

| Category | Library / Tool |
|---|---|
| Framework | React 19 + Vite 8 |
| Routing | React Router DOM v7 |
| State Management | Redux Toolkit + React Redux |
| Server State / Caching | TanStack Query (React Query) v5 |
| HTTP Client | Axios |
| Charts | Recharts v3 |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Notifications | React Toastify |
| Testing | Jest 30 + React Testing Library |
| Linting | ESLint 10 |
| Compiler | React Compiler (babel-plugin-react-compiler) |

---

## 📂 Project Structure

```
simple-dashboard/
├── public/                  # Static assets (loginbg2.avif, etc.)
├── src/
│   ├── api/                 # Axios API modules
│   │   ├── base.api.js      # Axios instance with base URL
│   │   ├── auth.api.js      # Login / auth endpoints
│   │   ├── user.api.js      # User CRUD endpoints
│   │   └── product.api.js   # Product endpoints
│   ├── components/
│   │   ├── charts/          # BarGraph, LineCharts, PieChart, StackedBarChart, SparkLine
│   │   ├── modals/          # AddUserModal, DeleteModal
│   │   ├── skeletons/       # ChartSkeleton, FilterSkeleton, TableSkeleton, StatCardSkeleton
│   │   ├── ErrorFallback.jsx
│   │   ├── Search.jsx
│   │   ├── StatCardRow.jsx
│   │   ├── StatCards.jsx
│   │   ├── Table.jsx
│   │   └── UserCard.jsx
│   ├── context/
│   │   └── ThemeProvider.jsx    # Light / Dark theme context
│   ├── css/                     # Per-page CSS files
│   ├── data/
│   │   └── chartData.js         # Chart registry / metadata
│   ├── features/
│   │   ├── authSlice.jsx        # Auth state (Redux)
│   │   └── filterSlice.jsx      # Dashboard filter state (Redux)
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   ├── usePagination.js
│   │   ├── useSort.js
│   │   └── useUsers.js
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx        # Main analytics dashboard
│   │   ├── Login.jsx            # Auth page (AnalytiQ)
│   │   ├── Profile.jsx          # Logged-in user profile
│   │   ├── Settings.jsx         # User management table
│   │   └── UserDetails.jsx      # Individual user detail view
│   ├── queries/
│   │   ├── users.query.js       # TanStack Query hooks for users
│   │   └── products.query.js    # TanStack Query hooks for products
│   ├── routes/
│   │   ├── AppRoutes.jsx        # Route definitions + lazy loading
│   │   └── ProtectedRoutes.jsx  # Auth guard wrapper
│   ├── store.js                 # Redux store (auth + filters reducers)
│   ├── utils/
│   │   └── GraphTransforms.jsx  # Data transform helpers for charts
│   └── validation/
│       └── userSchema.js        # Zod schema for add-user form
├── .env                         # Environment variables
├── vite.config.js
├── jest.config.cjs
├── babel.config.cjs
└── eslint.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd simple-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the project root (one already exists in the repo):

```env
VITE_API_BASE_URL="https://dummyjson.com"
```

> The app uses [DummyJSON](https://dummyjson.com) as a free mock REST API. No additional backend setup is required.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Login Credentials

The app authenticates against DummyJSON. Use any valid DummyJSON user credential, for example:

| Field | Value |
|---|---|
| Username | `emilys` |
| Password | `emilyspass` |

> You can find a full list of test users at [https://dummyjson.com/users](https://dummyjson.com/users).

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server (HMR enabled) |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across all source files |
| `npm test` | Run Jest unit tests |
| `npm run test:watch` | Run Jest in interactive watch mode |

---

## 🗺️ Application Routes

| Path | Page | Auth Required |
|---|---|---|
| `/login` | Login | ❌ |
| `/dashboard` | Analytics Dashboard | ✅ |
| `/settings` | User Management | ✅ |
| `/me` | My Profile | ✅ |
| `/user/:id` | User Detail | ✅ |

All authenticated routes are wrapped in a `ProtectedRoutes` guard that redirects unauthenticated users to `/login`. Pages are **lazy-loaded** with Suspense skeleton fallbacks.

---

## 📊 Dashboard Filters

The Dashboard page exposes three filtering controls:

| Control | Description |
|---|---|
| **Charts** dropdown | Show all, user-only, or product-only charts |
| **Birth date from / to** | Filter user-based charts by birth date range |
| **Search** | Find a specific chart by name (debounced) |

Charts are paginated — 4 per page — with Prev / Next navigation.

---

## 🧪 Testing

Tests live alongside the source files they cover:

```
src/components/Search.test.jsx
src/components/modals/AddUserModal.test.jsx
src/api/user.api.test.js
```

Run all tests:

```bash
npm test
```

The test suite uses **Jest** with `jest-environment-jsdom` and **React Testing Library**. CSS modules are proxied via `identity-obj-proxy`.

---

## 🏗️ State Management

| Slice | Managed State |
|---|---|
| `auth` | `user`, `isAuthenticated`, `isLoading`, `error` |
| `filters` | `chartScope` (all / users / products), `dateRange` (from / to) |

Server state (API data + caching) is handled by **TanStack Query**, keeping remote data separate from UI state in Redux.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
