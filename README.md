[![my14ers banner](assets/my14ers_banner.png)](https://yuzhang-io.github.io/)

# my14ers — Colorado 14er checklist

This repo is a custom Astro + Leaflet experience for tracking Colorado fourteeners, rendering a divided checklist (Front/Sangre · Mosquito/Sawatch · Elk/San Juan), and exporting a polished 1600×1200 PNG snapshot with the same map + marker order as the app.

## Highlights

- **Interactive checklist** — toggle climbs in your browser (stored in `localStorage`), fly from the checklist or map markers, and keep counts synced on the pill.
- **Mapbox-powered styling** — dark and Light (Relief) base layers use custom Mapbox styles; exported PNGs request the current style so the aesthetic stays consistent.
- **Export pipeline** — a `Export PNG` button draws the map, markers, and checklist into a canvas, adds the minimal Mapbox/OpenStreetMap credit, and downloads a shareable image without exposing ArcGIS dependencies.
- **Progressive UI** — responsive layout with Tailwind and custom gradients, plus carefully tuned light/dark marker pills reflects the production snapshot.

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:4321` to interact with the map/checklist. Toggle "Base" to switch between the neon dark theme and the relief light theme, and click `Export PNG` to download the shareable poster.

## Build & deploy

- `npm run build` compiles the Astro site (including Tailwind CSS) into `./dist/`.
- GitHub Pages deploy is handled via `.github/workflows/deploy.yml` using `withastro/action` — ensure your workflow runs `npm install`/`npm run build` and publishes the generated `dist/` because the GH Pages preview needs the compiled CSS/assets to show the gradients/background tiles. If the live page looks stripped-down, double-check that the workflow is pointing to the right output directory and that it’s triggered on the `main` branch.

## Structure notes

- `src/components/FourteenerMap.astro` hosts the Leaflet controls, checklist logic, and export utilities (including the canvas renderer and numbering sort that keeps ranges grouped correctly).
- `src/layouts/BaseLayout.astro` wires the global background gradients + `pointer-events: none` layers so the site matches the promo mockup.
- Global styles reside in `src/styles/global.css`; Tailwind is configured via `tailwind.config.cjs` and injected at build time through the Astro Vite plugin.

## Credits

Map imagery: Mapbox + OpenStreetMap. Marker logic, export canvas, and checklist data are homegrown for this experience.
