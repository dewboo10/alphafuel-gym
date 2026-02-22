# ⚡ AlphaFuel Gym — React + Tailwind Website

A bold, production-grade gym website built with **React 18**, **Vite**, and **Tailwind CSS v3**.

## 🏋️ Pages Included

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, stats, features, testimonials, CTA |
| **About Us** | `/about` | Story, values, timeline, team |
| **Services** | `/services` | 6 service cards, 3 membership tiers, facilities |
| **Contact** | `/contact` | Contact form, info, map, FAQ accordion |

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ (download at https://nodejs.org)

### Setup & Run

```bash
# 1. Navigate into the project
cd alphafuel-gym

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser. 🎉

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Tech Stack

- **React 18** — UI framework
- **React Router v6** — Client-side routing
- **Vite** — Lightning-fast dev server & bundler
- **Tailwind CSS v3** — Utility-first styling
- **Google Fonts** — Bebas Neue (display) + Barlow (body)

## 🗂️ Project Structure

```
alphafuel-gym/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   └── Footer.jsx       # Footer with links & info
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About us page
│   │   ├── Services.jsx     # Services & pricing
│   │   └── Contact.jsx      # Contact form & FAQ
│   ├── App.jsx              # Router setup
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind + global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary accent | `#E8900A` (fire orange) |
| Background | `#0A0A0A` (deep black) |
| Surface | `#111111` / `#1A1A1A` |
| Display font | Bebas Neue |
| Body font | Barlow |

## ✏️ Customization

- **Colors** → `tailwind.config.js` under `colors`
- **Gym name/location** → Search and replace `AlphaFuel` and `Hyderabad`
- **Services & pricing** → Edit arrays at top of `Services.jsx`
- **Team members** → Edit `TEAM` array in `About.jsx`
- **Contact details** → Edit `Contact.jsx` and `Footer.jsx`

---

Made with 💪 in India 🇮🇳
