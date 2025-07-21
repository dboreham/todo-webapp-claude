# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a todo web application built with TypeScript, React, and Next.js. The application demonstrates modern web development practices and Claude-assisted development.

## Technology Stack

- **Language**: TypeScript
- **Framework**: React 18+
- **Meta-framework**: Next.js 14+ (App Router)
- **Styling**: CSS Modules (default Next.js approach)
- **State Management**: React hooks (useState, useReducer)
- **Data Persistence**: Local Storage (client-side)

## Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## Project Structure

```
todo-webapp-claude/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── TodoList.tsx      # Todo list display
│   ├── TodoItem.tsx      # Individual todo item
│   ├── TodoForm.tsx      # Form for adding todos
│   └── TodoFilter.tsx    # Filter controls
├── lib/                   # Utility functions and types
│   ├── types.ts          # TypeScript type definitions
│   └── storage.ts        # Local storage utilities
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── README.md            # Project documentation
```

## Core Features

The todo application includes:
- Creating new todos with title and optional description
- Marking todos as complete/incomplete with checkbox
- Editing existing todos inline
- Deleting todos with confirmation
- Filtering todos by status (all, active, completed)
- Persisting todos in browser's local storage
- Responsive design for mobile and desktop

## Development Guidelines

1. **Component Structure**: Use functional components with TypeScript interfaces for props
2. **State Management**: Keep state as local as possible, lift only when necessary
3. **Type Safety**: Define interfaces for all data structures, avoid `any` type
4. **Error Handling**: Implement proper error boundaries and user feedback
5. **Accessibility**: Ensure ARIA labels and keyboard navigation support

## Architecture Decisions

- **App Router**: Using Next.js App Router for better performance and server components
- **Client Components**: Todo interactions require client-side state, use `"use client"` directive
- **Local Storage**: Simple persistence without backend complexity
- **CSS Modules**: Scoped styling without additional dependencies