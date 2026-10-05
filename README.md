# Admin Dashboard

A Next.js 14 dashboard UI leveraging NextAuth for secure authentication and CSS modules for component-scoped styling. It serves as a management interface for product and user entities.

## Features

- Real-time analytics visualization with Recharts
- User management interface with role-based access control (CRUD operations)
- Product inventory management
- Client-side search and server-side pagination routing
- Secure login and session handling via NextAuth
- Transaction history tracking

## Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **CSS Modules**
- **Recharts**

### Backend & Authentication
- **NextAuth.js** - Authentication provider integration
- **MongoDB / Mongoose** - Document database and ODM
- **bcrypt** - Password hashing

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SamuelIVX/AdminDashboard.git
cd AdminDashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and provide your MongoDB connection string and NextAuth secrets:

```env
MONGO=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```bash
src/
├── app/                  # Next.js App Router (pages and layouts)
│   ├── dashboard/        # Authenticated dashboard views
│   ├── login/            # Authentication interface
│   └── api/              # Serverless route handlers
├── components/           # Reusable UI components
├── lib/                  # Database connections and utilities
├── models/               # Mongoose schemas
└── styles/               # Global CSS and module configurations
```
