# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

All commands should be run from the `frontend/` directory:

Start development server:
```bash
cd frontend && npm run dev
```

Build for production:
```bash
cd frontend && npm run build
```

Start production server:
```bash
cd frontend && npm start
```

Run linting:
```bash
cd frontend && npm run lint
```

## Application Architecture

This is a Next.js 15.4.1 application serving two distinct focus areas through **path-based routing**:

1. **Gambling Addiction Recovery Support**
2. **Slow Learning Educational Support**

### Core Architecture Patterns

**Path-Based Routing System:**
- Routes organized by focus area: `/gambling/*` and `/slow-learning/*`
- Landing page (`/`) provides premium path selection experience
- Each path has dedicated intro pages before assessments
- No global theme switching - context determined by URL path

**Route Structure:**
```
/                           → Landing with path selection
/gambling/intro             → Gambling addiction introduction
/gambling/assessment        → Gambling addiction assessment
/gambling/causes            → Understanding causes
/gambling/effects           → Recognizing effects
/gambling/get-help          → Treatment guidance
/gambling/resources         → Support resources

/slow-learning/intro        → Slow learning introduction
/slow-learning/assessment   → Learning assessment
/slow-learning/strategies   → Learning strategies
/slow-learning/support      → Academic support
/slow-learning/resources    → Educational resources
```

**Component Structure:**
- `src/components/shared/` contains reusable components:
  - `Navigation.tsx` - Context-aware navigation (adapts to current path)
  - `Footer.tsx` - Universal footer component
- `src/components/ui/` contains UI primitives using class-variance-authority (cva)
- `src/components/features/` contains specialized components for specific features

**Navigation Architecture:**
- Context-aware navigation that adapts based on current pathname
- Different navigation items and styling for gambling vs slow-learning paths
- Clean, minimal navigation on landing page
- Contextual CTAs ("Get Help Now" vs "Get Support")

### Key Data Structures

**Constants Organization:**
- `src/constants/navigation.ts` - Navigation arrays for both focus areas
- `src/constants/content.ts` - Legacy content configuration (being phased out)
- `src/constants/causes.ts` - Gambling addiction specific data
- `src/constants/slowLearners.ts` - Educational support data
- `src/constants/site.ts` - Shared application constants (brand name: "You Matter")

### Technology Stack

- **Framework:** Next.js 15.4.1 with App Router
- **React:** 19.1.0 with TypeScript
- **Styling:** Tailwind CSS with custom theme extensions
- **UI Components:** Radix UI primitives with custom implementations
- **Icons:** Lucide React
- **Variants:** Class Variance Authority (cva) for component variants

### Development Notes

**Component Typing:**
- Use `React.FC` for functional components, not `NextPage`
- Proper forwardRef implementation in UI components for ref forwarding

**Path-Based Context Detection:**
- Use `usePathname()` from `next/navigation` to determine current context
- Components adapt styling and behavior based on pathname patterns
- No global state management needed - context is derived from URL

### Design System Architecture

**Premium Minimal Design:**
- Apple iOS and Palantir.com inspired aesthetic
- Clean white backgrounds with subtle gradients
- Context-specific accent colors: blue for gambling, emerald for slow-learning
- Minimal color palette focusing on typography and white space

**Context-Aware Styling:**
- Components detect context via pathname and apply appropriate styling
- Gambling paths: Blue accent colors (`bg-blue-600`, `text-blue-600`)
- Slow-learning paths: Emerald accent colors (`bg-emerald-600`, `text-emerald-600`)
- Landing page: Neutral grays with subtle gradients
- Consistent card patterns with hover effects and smooth transitions

### Critical Development Guidelines

**Path-Based Context Implementation:**
- Use `usePathname()` to determine current context instead of theme props
- Implement conditional styling based on pathname patterns (`pathname.startsWith('/gambling')`)
- Test both gambling and slow-learning paths when implementing new components
- Avoid hardcoded colors - use context-appropriate semantic classes

**Component Architecture:**
- Components should be context-agnostic and adapt based on pathname
- Context-specific logic should be contained within styling functions
- Maintain consistent patterns across both focus areas
- Landing page components should remain neutral and minimal

**Navigation Patterns:**
- Navigation adapts based on current pathname context
- Different navigation items for gambling vs slow-learning sections
- Contextual CTAs and styling based on current path
- Clean, minimal navigation on landing page

**Content Management:**
- Content specific to each focus area should be co-located with components
- Shared constants in `/constants/` directory for cross-cutting concerns
- Brand name "You Matter" centralized in `src/constants/site.ts`

**Code Quality:**
- ESLint configured with Next.js TypeScript rules
- No test framework currently configured
- Build and lint must pass before any deployment
- Escape apostrophes in JSX content with `&apos;` to avoid ESLint errors