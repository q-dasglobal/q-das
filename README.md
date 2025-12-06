# Q-DAS Global

A modern, high-performance website for Q-DAS Global, a leading ICT solutions provider in Nigeria. Since 2011, Q-DAS Global has been empowering organizations with intelligent, secure, and scalable digital systems through comprehensive software development, managed IT services, infrastructure solutions, IT consulting, and professional support.

## Overview

This is a Next.js-based corporate website featuring a modern design system, responsive layouts, and optimized performance. The site showcases Q-DAS Global's services, company information, team members, news articles, and provides contact functionality.

## Features

- **Modern UI/UX**: Built with Tailwind CSS and Shadcn UI components for a polished, accessible interface
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Performance Optimized**: Server-side rendering, ISR, image optimization, and code splitting
- **Type Safety**: Full TypeScript implementation with strict type checking
- **SEO Optimized**: Metadata, Open Graph, and Twitter card support
- **CMS Integration**: Sanity CMS with embedded Studio for content management
- **Email Service**: Resend integration for contact form submissions
- **Form Validation**: Contact forms with Zod schema validation and React Hook Form
- **Accessibility**: WCAG-compliant components using Radix UI primitives
- **Animation**: Smooth transitions and micro-interactions using Motion library

## Tech Stack

### Core

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn UI** - Accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library
- **Motion** - Animation library

### Content Management & Email

- **Sanity CMS** - Headless CMS for news and team content
- **Sanity Studio** - Embedded content editor at `/admin`
- **Resend** - Email service for contact form submissions
- **@portabletext/react** - Rich text content rendering

### Forms & Validation

- **React Hook Form** - Performant form library
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## Prerequisites

- Node.js 18+ (or higher)
- pnpm (recommended), npm, yarn, or bun

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd q-das
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-write-token

# Resend Email
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=contact@q-das-global.com
RESEND_TO_EMAIL=info@q-das-global.com
```

**Getting Credentials:**

- **Sanity**: Sign up at [sanity.io](https://sanity.io), create a project, get credentials from dashboard
- **Resend**: Sign up at [resend.com](https://resend.com), get API key from dashboard

4. Run the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

6. Access Sanity Studio at [http://localhost:3000/admin](http://localhost:3000/admin) to manage content.

## Content Management

### Sanity Studio

Access the embedded Sanity Studio at `/admin` to manage:

- **News Articles**: Create, edit, and publish news with rich text content
- **Team Members**: Manage team profiles with images and roles
- **Authors**: Add and manage article authors

### Data Migration

To migrate existing static content to Sanity:

```bash
npx tsx scripts/migrate-to-sanity.ts
```

**Note:** Images cannot be auto-migrated. After running the script:

1. Go to http://localhost:3000/admin
2. Upload images for each news article and team member
3. Review and publish all content

### Email Configuration

For production, set up a custom domain with Resend (free):

1. Log into Resend dashboard
2. Add your domain (e.g., `q-das-global.com`)
3. Add DNS records (SPF, DKIM, Return-path) to your domain provider
4. Verify domain in Resend
5. Update `RESEND_FROM_EMAIL` in `.env.local`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm typecheck` - Run TypeScript type checking

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow ESLint and Prettier configurations
- Use functional components with React Server Components where possible
- Prefer composition over inheritance

### Component Organization

- Group components by feature/page in dedicated directories
- Use index.ts files for clean imports
- Keep shared components in `components/shared/`
- UI primitives live in `components/ui/`

### Styling

- Use Tailwind CSS utility classes
- Follow the design system defined in `docs/DESIGN_SYSTEM.md`
- Maintain consistent spacing and typography
- Ensure responsive design for all components

### Type Safety

- Define types in `lib/types/` for shared types
- Use Zod schemas for runtime validation
- Avoid `any` types; use proper TypeScript types

## Deployment

The application is optimized for deployment on Vercel, but can be deployed to any platform that supports Next.js.

### Vercel Deployment

1. Push your code to a Git repository
2. Import the project in [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy

The application will automatically build and deploy on every push to the main branch.

### Build for Production

```bash
pnpm build
pnpm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Q-DAS Global

## Contact

For questions or support, please contact Q-DAS Global through the contact page on the website.
