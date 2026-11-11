# Built in 3

**Build your body. Build your mind. Build your life.**

Built in 3 is a lifestyle brand and community website built around discipline, growth, and accountability. The site includes a marketing home page, an About page, a shop for the first release, a community page, a contact form, and **The Builder's Manual**, an interactive 40-page guided workbook that saves each reader's answers in their browser.

> *Fitness is the vehicle. Character is the destination.*

---

## Features

- **Single-page navigation:** Home, About, Shop, Community, and Contact switch instantly without a page reload.
- **The Builder's Manual:** a 40-page guided field guide with a cover page, a page jumper, previous/next navigation, and a progress bar.
- **Interactive workbook pages:** reflection prompts, fill-in commitment lines, and checkbox tables. Answers autosave locally in the reader's browser, so nothing is sent to a server.
- **Shop page:** a featured product page ready for Payhip checkout (see [Roadmap](#roadmap)).
- **Branded dark design:** a black and lime palette with soft neon glow accents, responsive from mobile to desktop.
- **Accessible by default:** semantic headings, labeled form fields, and visible keyboard focus states.

## Tech Stack

| Area | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | [React](https://react.dev/) with TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Content | JSON data file (`data/manual_data.json`) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or newer
- npm (included with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd built-in-3-manual

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run the linter |

## Project Structure

```
built-in-3-manual/
├── app/
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── page.tsx                    # Home page and view switching
│   └── manual/
│       └── [pageNumber]/
│           └── page.tsx            # Manual pages 2-40 (dynamic route)
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── PillarsSection.tsx          # The three pillars
│   ├── FeaturedResourceSection.tsx # Home page featured product
│   ├── QuoteSection.tsx
│   ├── AboutSection.tsx
│   ├── ShopSection.tsx
│   ├── CommunitySection.tsx
│   ├── ContactSection.tsx
│   ├── BuilderManualPage.tsx       # Interactive manual page template
│   └── Footer.tsx
├── data/
│   └── manual_data.json            # Content for all manual pages
└── public/
    └── logos/
        └── b3.png                  # Brand logo
```

## How It Works

### Site navigation

The home page (`app/page.tsx`) keeps track of the active view in state (`home`, `about`, `shop`, `community`, `contact`, or `manual`) and renders the matching section. Buttons across the site, such as "Take a closer look" and "Get involved," change the view without reloading the page.

### The Builder's Manual

- **Page 1** (the cover) renders inside the home page. Pages 2 to 40 are served by the dynamic route at `/manual/[pageNumber]`.
- All page content lives in `data/manual_data.json`. Each entry has a `pageNumber`, a title, content blocks, and optional interactive elements such as tables and reflection exercises.
- `BuilderManualPage.tsx` renders every page from that data, so adding or editing a page only requires editing the JSON file.
- Readers' answers are stored in the browser's `localStorage`, keyed by page number. There is no backend or account system.

### Editing the manual length

The page count is set to **40** in two places and should be kept in sync:

- `app/page.tsx` (`TOTAL_PAGES`)
- `app/manual/[pageNumber]/page.tsx` (`TOTAL_PAGES`)

## Customization

- **Brand color:** the lime accent is `#a3e635`. Search the project for this value to change it everywhere.
- **Logo:** replace `public/logos/b3.png`. A version with a transparent background will blend best with the glow effects.
- **Copy:** most page text lives directly in the component for that page. Manual content lives in `data/manual_data.json`.

## Roadmap

- [ ] Connect the shop to [Payhip](https://payhip.com/) for checkout and automatic PDF delivery (add the checkout link to `CHECKOUT_URL` in `components/ShopSection.tsx`)
- [ ] Connect the contact form to an email or form service (the form is currently demo-only and does not send or store messages)
- [ ] Add additional manual parts and shop products

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new), which supports Next.js out of the box:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Click **Deploy**.

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

## License

All rights reserved. This project and its content are proprietary to Built in 3. Contact the project owner for permission before reusing any part of it.
