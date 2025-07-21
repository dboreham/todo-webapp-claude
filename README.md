# Todo Web App

A modern todo application built with Next.js, React, TypeScript, PostgreSQL, and Claude AI assistance.

## Features

- ✅ Create, read, update, and delete todos
- 📝 Optional descriptions for todos
- ✓ Mark todos as complete/incomplete
- 🔍 Filter by status (all, active, completed)
- 💾 Server-side persistence with PostgreSQL
- 🔄 RESTful API backend
- 📱 Responsive design
- ⌨️ Keyboard accessible
- 🚨 Error handling and user feedback

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **UI Library**: React 18+
- **Styling**: CSS Modules
- **Database**: PostgreSQL
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- PostgreSQL 12+ installed and running

### Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE todo_app;
```

2. Update the database connection string in `.env.local`:
```
DATABASE_URL=postgresql://your_username:your_password@localhost:5432/todo_app
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dboreham/todo-webapp-claude.git
cd todo-webapp-claude
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   │   └── todos/   # Todo CRUD endpoints
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Main todo page
├── components/       # React components
├── lib/             # Utilities and types
│   ├── api.ts       # Frontend API client
│   ├── db/          # Database utilities
│   │   ├── pool.ts  # PostgreSQL connection pool
│   │   └── schema.sql # Database schema
│   └── types.ts     # TypeScript definitions
├── public/          # Static assets
└── CLAUDE.md        # Claude AI guidance file
```

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/[id]` - Update a todo
- `DELETE /api/todos/[id]` - Delete a todo

## Contributing

This project was created as a demonstration of Claude AI-assisted development. Feel free to fork and modify as needed.

## License

ISC
