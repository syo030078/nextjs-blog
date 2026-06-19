# CLAUDE.md

This file is a project guide for Claude Code / AI agents.

## Project Overview

**miyata-tech-note** — Personal portfolio and tech blog site.

- Next.js 13 (Pages Router)
- JavaScript (no TypeScript)
- Hybrid setup: Chakra UI + CSS Modules

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
npm run test     # Jest tests
npm run test:ci  # CI tests (with coverage)
```

## Directory Structure

```
nextjs-blog/
├── src/
│   ├── pages/          # Next.js pages (_app, _document, index)
│   ├── components/     # React components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Constants & Chakra theme
│   └── styles/         # Global CSS & CSS Modules
├── lib/
│   └── posts.js        # Markdown post fetching & parsing (gray-matter + remark)
├── posts/              # Markdown articles (frontmatter: title, date)
├── public/             # Static assets
└── __mocks__/          # Jest mocks
```

## Path Aliases

`jsconfig.json` maps `@/*` → `./src/*`.

```js
import theme from '@/lib/theme'
import '@/styles/globals.css'
```

## Coding Conventions

### Language & Style

- **JavaScript only** — new files use `.js` / `.jsx`
- **Minimal changes** — avoid refactoring or abstractions beyond the requested scope
- **Follow existing patterns** — match surrounding naming, structure, and style

### UI

- **Chakra UI** — header, layout parts (`Box`, `Flex`, `Heading`, `Image`, etc.)
- **CSS Modules** — page-specific styles (`*.module.css`)
- **CSS variables** — dark mode support (`--bg-primary`, `--subtitle-color`, etc. in `globals.css`)
- **framer-motion** — page animations (`motion.section`, etc.)

### Components

- `Layout` — shared layout for all pages; `home` prop toggles top-page display
- `Header` — navigation + color mode toggle
- `Bio` — timeline-style biography section
- Constants live in `src/lib/constants.js` (`siteTitle`, `name`)

### Articles (Markdown)

- Place files in `posts/*.md` with frontmatter (`title`, `date`)
- `lib/posts.js` provides `getSortedPostsData`, `getAllPostIds`, `getPostData`
- Post detail pages are not yet implemented — use `src/pages/posts/[id].js` pattern when adding

## Testing

- Jest + React Testing Library
- CSS mocked via `__mocks__/styleMock.js`
- Do not add tests unless explicitly requested — only meaningful coverage

## Git

- Only create commits when explicitly asked by the user
- Commit messages should concisely describe the *why* behind the change

## Communication

- Respond to the user in **Japanese**

## Notes

- Accidental macOS Finder copies (`file 2.json`, etc.) are excluded via `.gitignore` — delete if found
- Never commit `.env*.local` or secrets
- Do not migrate to App Router unless explicitly requested
