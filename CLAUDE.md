# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing a Next.js frontend application focused on providing support for two distinct areas:
1. **Gambling Addiction Recovery Support**
2. **Slow Learning Educational Support**

The project uses **path-based routing** to serve these different focus areas through a single application.

## Development Commands

All development work is done in the `frontend/` directory. Commands should be run from there:

**Development server:**
```bash
cd frontend
npm run dev
```
Opens at http://localhost:3000

**Production build:**
```bash
cd frontend
npm run build
```

**Start production server:**
```bash
cd frontend
npm start
```

**Linting:**
```bash
cd frontend
npm run lint
```

## Architecture Overview

### Application Design
- **Next.js 15.4.1** with App Router and React 19.1.0
- **Path-based routing system** - no global theme switching, context determined by URL
- **Two distinct user journeys:**
  - `/gambling/*` - Gambling addiction recovery path (blue theme)
  - `/slow-learning/*` - Educational support path (emerald theme)
- **Landing page** (`/`) provides premium path selection experience

### Technology Stack
- **Framework:** Next.js 15.4.1 with App Router
- **React:** 19.1.0 with TypeScript 5.x
- **Styling:** Tailwind CSS 3.4.17 with custom theme extensions
- **UI Components:** Radix UI primitives with class-variance-authority (cva)
- **Icons:** Lucide React 0.525.0

### Key Directories
```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── gambling/          # Gambling addiction path
│   │   └── slow-learning/     # Educational support path
│   ├── components/
│   │   ├── ui/               # Reusable UI primitives
│   │   ├── shared/           # Shared layout components
│   │   └── features/         # Feature-specific components
│   ├── constants/            # Application constants and data
│   ├── contexts/             # React contexts
│   └── lib/                  # Utility functions
```

### Context-Aware Architecture
Components automatically adapt based on the current pathname:
- Use `usePathname()` from `next/navigation` to determine context
- Gambling paths: Blue accent colors (`bg-blue-600`, `text-blue-600`)
- Slow-learning paths: Emerald accent colors (`bg-emerald-600`, `text-emerald-600`)
- Landing page: Neutral styling with minimal design

### Design System
- **Premium minimal aesthetic** inspired by Apple iOS and Palantir.com
- **Context-specific accent colors** based on URL path
- **Brand name:** "You Matter" (defined in `src/constants/site.ts`)
- **Typography:** Inter font family with multiple weights
- **Dual theme system:**
  - Gambling paths use default CSS variables (`--primary`, `--secondary`, etc.)
  - Slow-learning paths use `sl-*` prefixed variables (`--sl-primary`, `--sl-accent`, etc.)
  - Both defined in `src/app/globals.css` with WCAG AA compliant colors

## Development Guidelines

### Path-Based Context Implementation
- Always use `usePathname()` to determine current context instead of theme props
- Implement conditional styling based on pathname patterns (`pathname.startsWith('/gambling')`)
- Test both gambling and slow-learning paths when implementing new components
- Avoid hardcoded colors - use context-appropriate semantic classes

### Component Architecture
- Components should be context-agnostic and adapt based on pathname
- Context-specific logic should be contained within styling functions
- Use `React.FC` for functional components, not `NextPage`
- Proper forwardRef implementation in UI components for ref forwarding

### Code Quality Standards
- ESLint configured with Next.js TypeScript rules
- Build and lint must pass before any deployment
- Escape apostrophes in JSX content with `&apos;` to avoid ESLint errors
- No test framework currently configured
- Import aliases configured: `@/*` maps to `./src/*` (defined in tsconfig.json)

### Navigation Patterns
- Navigation adapts based on current pathname context
- Different navigation items for gambling vs slow-learning sections
- Contextual CTAs and styling based on current path
- Clean, minimal navigation on landing page

## Important Files

### Configuration Files
- `frontend/package.json` - Dependencies and scripts
- `frontend/tailwind.config.ts` - Tailwind CSS configuration with custom theme
- `frontend/next.config.ts` - Next.js configuration
- `frontend/tsconfig.json` - TypeScript configuration

### Key Constants
- `src/constants/navigation.ts` - Navigation arrays for both focus areas
- `src/constants/site.ts` - Shared application constants (brand name: "You Matter")
- `src/constants/causes.ts` - Gambling addiction specific data
- `src/constants/slowLearners.ts` - Educational support data

### Detailed Documentation
For comprehensive implementation details, design system, and component architecture, refer to:
- `frontend/CLAUDE.md` - Detailed frontend-specific guidance
- `frontend/STYLE_GUIDE.md` - Complete design system documentation

## Critical Notes

1. **Always work from the frontend directory** - this is where the active codebase lives
2. **Test both paths** - any new components should work for both gambling and slow-learning contexts
3. **No global theme state** - context is derived from URL pathname patterns
4. **Maintain brand consistency** - use "You Matter" as the brand name across all implementations
5. **Accessibility focus** - maintain high contrast and semantic HTML practices
6. **Styling approach** - use Tailwind utility classes with context-aware conditional logic; avoid inline styles
7. **Component imports** - use `@/*` path alias (e.g., `@/components/ui/Button`) instead of relative paths