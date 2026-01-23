# Boston Underwood's Portfolio

A modern, dynamic portfolio website showcasing projects, experiences, and creative work. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations, interactive components, and a beautiful dark mode design.

## Features

- **Animated Hero Section** - Eye-catching typing effect and gradient text with floating background elements
- **Featured Projects Showcase** - Highlighting key projects including:
  - Thrifthood AI (LangChain, TypeScript, Supabase)
  - CineNiche Streaming Platform (React, C#, ASP.NET, Azure)
  - Gronk Bot (Snowflake, Python, NFL Analytics)
- **Interactive Project Cards** - Hover effects and gradient backgrounds with links to demos and presentations
- **Life Snapshots Gallery** - Photo grid showcasing personal moments
- **About Page** - Interactive headshot shuffler and detailed background information
- **Projects Page** - Complete portfolio of technical work and side projects
- **Dark Mode Support** - Seamless light/dark theme switching
- **Responsive Design** - Mobile-first approach that looks great on all devices
- **Smooth Animations** - Fade-in effects, parallax scrolling, and micro-interactions

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom React components with glassmorphism effects
- **Icons & Assets**: Next.js Image optimization
- **Deployment**: Configured for static export to AWS S3/CloudFront

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

Generate a static export for deployment:

```bash
npm run build
```

The static files will be output to the `out` directory.

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   └── styles/           # Global styles
├── public/
│   └── images/           # Static assets and photos
└── package.json
```

## Deployment

This portfolio is configured for static site generation and deployed to AWS S3 with CloudFront CDN for optimal performance and global distribution.

## License

© 2026 Boston Underwood. All rights reserved.
