# Notable — Next.js Website

**GoBeNotable.com** | Built with Next.js 14 + Tailwind CSS

## Pages
- `/` — Home
- `/about` — About Notable
- `/essentials` — Notable Essentials (brand foundation packages)
- `/amplify` — Notable Amplify (platform + revenue buildout)
- `/vanguard` — Notable Vanguard
- `/contact` — Book a Discovery Call

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — click Deploy
4. Done. Add your custom domain in Vercel's dashboard.

## Deploy to Netlify
1. Push to GitHub
2. Go to Netlify → New site from Git → select your repo
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Install the Netlify Next.js plugin if prompted

## Adding a Booking Link
In `components/Nav.tsx` and anywhere "Book a Call" links appear, replace `/contact` with your Calendly or booking URL if you want direct scheduling:
```tsx
href="https://calendly.com/your-link"
```

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Playfair Display + DM Sans

## Brand Colors
| Name     | Hex       | Usage                    |
|----------|-----------|--------------------------|
| Crimson  | `#8B1A34` | Primary — Notable brand  |
| Ink      | `#0F0F0F` | Near-black backgrounds   |
| Mauve    | `#7B4F5E` | Labels, captions         |
| Bone     | `#F4F1EE` | Light section backgrounds|
| Warm     | `#E8E3DE` | Dividers, grid gaps      |
| Navy     | `#1E3A6E` | Vanguard accent color    |
