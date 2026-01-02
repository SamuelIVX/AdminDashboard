# Admin Dashboard

**Full-Stack Admin Dashboard Web Application**

> "Manage your business with ease."

A modern, production-ready admin dashboard that provides comprehensive management tools for users and products with real-time analytics and insights.

## Features

- 📊 **Analytics Dashboard** - Visualize key metrics with charts and cards
- 👥 **User Management** - Create, view, update, and delete users with role-based access
- 📦 **Product Management** - Manage products with full CRUD operations
- 🔍 **Search & Pagination** - Fast client-side search and server-side pagination
- 🔐 **Authentication** - Secure login system with NextAuth
- 📈 **Transaction Tracking** - Monitor and view transaction history
- 🎨 **Modern UI** - Clean, responsive design with custom CSS modules

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **CSS Modules** - Component-scoped styling
- **Recharts** - Data visualization

### Backend & Database
- **Next.js API Routes** - Server-side API endpoints
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication
- **NextAuth v5** - Authentication and session management
- **bcrypt** - Password hashing

## Prerequisites

- Node.js v18 or higher
- npm or yarn
- MongoDB database (local or cloud instance)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SamuelIVX/AdminDashboard.git
cd admindashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── dashboard/          # Dashboard pages and routes
│   ├── products/      # Product management
│   └── users/         # User management
├── login/             # Authentication pages
├── lib/               # Utility functions and data operations
└── ui/                # React components
    └── dashboard/     # Dashboard UI components
```
