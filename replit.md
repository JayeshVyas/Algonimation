# Algonimation Website - Replit Project

## Overview

This is a modern React-based company website for Algonimation, a technology company offering web development, app development, PLM customizations, KPO/BPO services, and AI solutions. The application features a responsive single-page design with contact form functionality and a comprehensive component library.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: Radix UI primitives with custom shadcn/ui components
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Style**: RESTful endpoints
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Package Manager**: npm with package-lock.json
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Development Server**: Custom Vite setup with hot module replacement

## Key Components

### UI Components
- Complete shadcn/ui component library including buttons, forms, dialogs, navigation, and data display components
- Custom Logo component with gradient styling
- Responsive navigation with mobile menu support
- Animated sections for hero, services, products, about, and contact

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Stores contact form submissions with fields for personal info, company details, service selection, and messages
- **Zod Validation**: Type-safe form validation schemas derived from database schema

### Business Logic
- Contact form submission with email notifications
- In-memory storage implementation with interface for future database integration
- Error handling with proper HTTP status codes and user-friendly messages

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using Zod schema on client-side
3. Data submitted to `/api/contact` endpoint
4. Server validates data again using shared schema
5. Contact submission stored in database
6. Email notification sent (currently simulated)
7. Success/error response returned to client
8. User feedback displayed via toast notifications

### Component Communication
- React Query manages server state and caching
- Props and callbacks for component communication
- Context providers for global state (toasts, tooltips)
- Smooth scrolling utility for navigation between sections

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm & drizzle-kit**: Type-safe ORM with migration support
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **zod**: Runtime type validation
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from public directory

### Environment Configuration
- **Development**: Uses tsx for hot reloading with Vite middleware
- **Production**: Serves built static files with Express
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Start development server with hot reloading
- `npm run build`: Build both frontend and backend for production
- `npm start`: Start production server
- `npm run db:push`: Push database schema changes using Drizzle

### Database Management
- Drizzle migrations stored in `./migrations` directory
- Schema defined in `shared/schema.ts` for type safety across frontend and backend
- PostgreSQL dialect with URL-based connection configuration

The application is designed to be easily deployable on platforms supporting Node.js with PostgreSQL databases, with particular consideration for Replit's environment including custom error overlays and development banners.