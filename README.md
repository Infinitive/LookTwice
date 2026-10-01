# LookTwice V4

A static Astro site with validated content collections, dynamic entry pages, RSS, sitemap, social metadata, Netlify headers, robots rules, a custom 404 page, and GitHub Actions CI.

## Local use

```bash
npm install
npm run dev
```

## Validate before pushing

```bash
npm run build
```

## Add content

Duplicate a Markdown file in `src/content/story`, `src/content/notes`, or `src/content/things`.

- `draft: true` keeps an entry out of public pages and RSS.
- `featured: true` makes an entry eligible for the homepage.
- The schema in `src/content.config.ts` stops the build if required fields are missing or invalid.

## Domain

The configured site is `https://looktwice.cc`. If the final public domain differs, update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.
