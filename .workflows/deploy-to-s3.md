---
description: Build and deploy static site to S3 + CloudFront
---

# Deploy to S3 + CloudFront

This workflow exports your Next.js portfolio as static files and deploys to AWS S3 with CloudFront.

## Prerequisites

- AWS CLI configured with appropriate credentials
- S3 bucket created (e.g., `portfolio.example.com`)
- CloudFront distribution pointing to the S3 bucket

## Build Static Files

```bash
npm run build
```

This creates an `out/` directory with all static HTML, CSS, JS, and image files.

## Deploy to S3

```bash
aws s3 sync out/ s3://your-bucket-name --delete
```

The `--delete` flag removes files from S3 that aren't in your local `out/` directory.

## Invalidate CloudFront Cache

After deploying, invalidate CloudFront to serve fresh content:

```bash
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## What Gets Exported

- Static HTML for each page (`/`, `/about`, `/projects`, `/resume`)
- Optimized CSS bundle with Tailwind
- JavaScript bundles for React interactivity
- All images from `/public` and `/images`
- Client-side routing still works via Next.js

## Key Points

✅ **All interactive features work**: Dark mode toggle, headshot shuffle, animations, etc.  
✅ **No server required**: Everything runs in the browser  
✅ **Fast & cheap**: S3 + CloudFront is highly performant and cost-effective  
✅ **SEO-friendly**: Static HTML is crawlable by search engines
