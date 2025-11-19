# MarketSync Frontend

Next.js + TypeScript + Tailwind CSS frontend for MarketSync, a multi-marketplace sync console.

### Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

### Setup
1. `npm install`
2. `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

### Folder Structure
- `src/app` – public routing surfaces and marketing pages
- `src/app/app` – authenticated console pages (dashboard, listings, orders…)
- `src/components` – reusable UI system components
- `src/lib` – API helpers and shared utilities
- `src/styles` – theme and design tokens
- `public` – static assets (logos, illustrations, etc.)

### Next Steps
1. Implement the full login experience (`src/app/login/page.tsx`).
2. Build the dashboard shell at `src/app/app/layout.tsx`.
3. Flesh out products, listings, orders, connect, and settings screens.
4. Integrate with the upcoming NestJS backend for live marketplace sync.
