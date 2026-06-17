# GNAVIDA Website Foundation

Base project for the institutional website of **GNAVIDA Gestão de Saúde Ocupacional**.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Montserrat via `next/font/google`

## Local Setup

```bash
npm install
npm run dev
```

## Structure

```text
app/
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  globals.css
components/
  Navbar.tsx
  ui/
    Badge.tsx
    Button.tsx
    SectionWrapper.tsx
lib/
  constants.ts
public/
  images/
    README.md
```

## Notes

- The current delivery is foundation only. Page sections are intentionally left as TODO imports in `app/page.tsx`.
- Real clinic photos should be added to `public/images`.
- Global SEO metadata and JSON-LD schemas are centralized in `app/layout.tsx`.
- Contact, address, hours, social links, and NAP values are centralized in `lib/constants.ts`.
