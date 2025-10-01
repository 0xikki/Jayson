# Hope Recovery PH - Style Guide

This document outlines the comprehensive style guide for the Hope Recovery PH frontend application. It includes details on the color palette, typography, component usage, architecture, and development standards to ensure a consistent and cohesive user experience.

## 🎨 Color Palette

The application uses a healthcare/recovery-themed color palette defined in HSL format for optimal compatibility with Tailwind CSS v3. Colors are defined as CSS variables in `src/app/globals.css` and configured in `tailwind.config.ts`.

### Primary Colors
- **Primary** (`--primary: 188 100% 42%`): Modern teal - Used for main navigation, headings, and primary actions
- **Secondary** (`--secondary: 162 73% 46%`): Healing green - Used for secondary actions and success states
- **Accent** (`--accent: 43 96% 56%`): Hope amber - Used for highlights and call-to-action elements

### Semantic Colors
- **Destructive** (`--destructive: 0 84% 60%`): Soft red for emergency actions and critical information
- **Muted** (`--muted: 210 40% 98%`): Light background for secondary content areas
- **Background** (`--background: 0 0% 100%`): Primary white background
- **Foreground** (`--foreground: 222.2 84% 4.9%`): Primary dark text color

### UI Colors
- **Border** (`--border: 214.3 31.8% 91.4%`): Light gray for component borders
- **Input** (`--input: 214.3 31.8% 91.4%`): Input field borders and backgrounds
- **Card** (`--card: 0 0% 100%`): Card component backgrounds
- **Ring** (`--ring: 188 100% 42%`): Focus ring color matching primary

Each color has a corresponding foreground color optimized for accessibility and contrast (e.g., `primary-foreground` for text on primary backgrounds).

### Custom Gradient Utilities
- `.gradient-primary`: Teal to green gradient for hero sections
- `.gradient-healing`: Subtle secondary/accent gradient for content sections
- `.gradient-warm`: Accent to destructive gradient for emergency sections

## 📝 Typography

The application uses **Inter** font family, configured in `src/app/layout.tsx` with multiple weights (300, 400, 500, 600, 700) and optimized loading.

### Font Configuration
```typescript
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
```

### Font Sizes (Tailwind CSS)
- `text-xs`: 0.75rem
- `text-sm`: 0.875rem
- `text-base`: 1rem (default)
- `text-lg`: 1.125rem
- `text-xl`: 1.25rem
- `text-2xl`: 1.5rem
- `text-3xl`: 1.875rem
- `text-4xl`: 2.25rem
- `text-5xl`: 3rem
- `text-6xl`: 3.75rem

## 🧩 Component Architecture

### UI Components (`src/components/ui/`)

#### Button Component
Location: `src/components/ui/Button.tsx`

**Variants:**
- `default`: Primary teal background with white text
- `destructive`: Red background for emergency actions
- `outline`: Transparent background with border
- `secondary`: Green background for secondary actions
- `ghost`: No background, hover effects only
- `link`: Text-only styling with underline on hover

**Sizes:**
- `default`: Standard height (h-10) with balanced padding
- `sm`: Compact size (h-9) for inline usage
- `lg`: Large size (h-11) for prominent actions

**Features:**
- Uses `@radix-ui/react-slot` for polymorphic behavior
- Supports `asChild` prop for rendering as different elements
- Built with `class-variance-authority` for type-safe variants

#### Card Component
Location: `src/components/ui/Card.tsx`

**Sub-components:**
- `Card`: Main container with rounded corners and shadow
- `CardHeader`: Top section with padding and spacing
- `CardTitle`: Semantic h3 heading with proper typography
- `CardDescription`: Muted text for descriptions
- `CardContent`: Main content area with appropriate padding
- `CardFooter`: Bottom section for actions

### Shared Components (`src/components/shared/`)

#### Navigation Component
Location: `src/components/shared/Navigation.tsx`

**Features:**
- Responsive design with mobile hamburger menu
- Sticky positioning with backdrop blur
- Dynamic navigation links from constants
- Integrated "Get Help Now" CTA button
- Hover animations and focus states

#### Footer Component
Location: `src/components/shared/Footer.tsx`

**Sections:**
- Brand information and mission statement
- Quick navigation links
- Contact information and social media
- Emergency hotline prominently displayed

### Feature Components (`src/components/features/landing/`)

#### Hero Component
**Purpose:** Main landing page hero with call-to-action
**Features:** Gradient background, dual CTA buttons, responsive typography

#### Statistics Component
**Purpose:** Display key gambling addiction statistics
**Layout:** Three-column grid with icon cards and statistics

#### QuickLinks Component
**Purpose:** Navigation cards to main site sections
**Features:** Interactive hover states, arrow icons, backdrop blur effects

#### EmergencyHelp Component
**Purpose:** Emergency contact information and immediate help
**Features:** Gradient background, prominent phone number, dual action buttons

## 📱 Application Structure

### Pages and Routing
- `/` - Landing page with Hero, Statistics, QuickLinks, EmergencyHelp
- `/causes` - Interactive exploration of gambling addiction causes
- `/effects` - Detailed impact analysis with tabbed interface
- `/get-help` - Step-by-step recovery guidance with progress tracking
- `/resources` - Support groups, hotlines, and treatment centers

### Constants and Configuration
- `src/constants/navigation.ts` - Navigation menu configuration
- `src/constants/site.ts` - Brand name and site-wide constants
- `src/constants/causes.ts` - Structured data for causes page

### Utilities
- `src/lib/utils.ts` - Utility functions including `cn()` for class merging

## 🛠 Technical Standards

### Framework Versions
- **Next.js**: 15.4.1 (App Router)
- **React**: 19.1.0
- **Tailwind CSS**: 3.4.17 (stable)
- **TypeScript**: 5.x

### Development Tools
- **PostCSS**: 8.5.6 with autoprefixer
- **ESLint**: Next.js configuration
- **Lucide React**: 0.525.0 for consistent iconography

### Code Standards
- All pages use `'use client'` directive for interactivity
- Consistent import ordering: React, Next.js, external libraries, internal components
- TypeScript interfaces for all props and data structures
- Semantic HTML with proper accessibility attributes
- Responsive design using Tailwind's mobile-first approach

### Accessibility Features
- Proper ARIA labels on navigation and interactive elements
- Semantic heading hierarchy (h1 → h2 → h3)
- Focus management and keyboard navigation
- High contrast color combinations
- Alt text for decorative icons

## 🎯 Design Patterns

### Interactive Elements
- Hover transitions using `transition-colors duration-200`
- Focus states with ring utilities
- Loading and success states for forms
- Progressive disclosure for complex information

### Layout Patterns
- Consistent max-width container: `max-w-7xl mx-auto`
- Standard padding: `px-4 sm:px-6 lg:px-8`
- Vertical spacing: `py-16` for sections
- Grid layouts: `grid md:grid-cols-3 gap-8`

### Content Organization
- Hero sections with gradient backgrounds
- Card-based content presentation
- Tabbed interfaces for complex information
- Progressive step-by-step guidance

## 🚨 Emergency Contact Integration

The application prominently features emergency contact information:
- **Primary Hotline**: Gamblers Anonymous Philippines (0917-509-4080)
- **Crisis Support**: National Crisis Hotline (1553)
- **Integration**: Emergency contacts appear in navigation, footer, and dedicated sections

## 📋 Maintenance Guidelines

### Adding New Components
1. Follow the established component structure
2. Use TypeScript interfaces for props
3. Implement proper error boundaries
4. Include accessibility attributes
5. Test responsive behavior across devices

### Color Modifications
1. Update HSL values in `src/app/globals.css`
2. Maintain contrast ratios for accessibility
3. Update both light and dark mode variants
4. Test across all components

### Content Updates
1. Modify constants files for navigation and data
2. Update metadata in layout files
3. Ensure emergency contact information remains current
4. Maintain consistent tone and messaging

This style guide ensures consistency, accessibility, and maintainability across the Hope Recovery PH application while supporting its mission to provide crucial gambling addiction resources in the Philippines. 