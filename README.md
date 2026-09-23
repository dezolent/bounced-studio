# Bounced

Bounced builds artist websites and helps organize the digital systems behind them. The public-facing brand is operated by Dezolent, LLC and focuses on the technical side of an artist’s online presence—not artist management, booking, or label services.

## What Bounced does

Bounced helps artists and their teams create a clear, durable home for their work and keep the surrounding digital setup easier to manage.

Services include:

- Custom artist websites for music, shows, merch, fan links, and artist bios.
- Domain, hosting, website, and content management.
- Branded email setup and connected digital accounts.
- Merch store setup and website integrations.
- Music catalog and upcoming-show connections where supported by the relevant services.
- Search optimization, structured data, metadata, and other technical improvements.
- Organization of music, release, rights, and commerce information.

ArtistOps—a longer-term vision for a connected dashboard covering shows, releases, website activity, merch, and related artist data—is currently in development. It is not presented as a live product on the public site.

## Selected work

- [Morbeato](https://morbeato.com) — artist website for music, live dates, and merch.
- [Dezolent](https://dezolent.com) — artist website and digital presence.
- [Coptr](https://coptr.com) — selected web and digital work.

## Project details

This repository contains the static marketing site for [bounced.studio](https://bounced.studio). It uses [Astro](https://astro.build/) with a single page, semantic HTML, responsive CSS, supplied Bounced wordmarks, and minimal client-side JavaScript. Netlify builds the site from the `main` branch and publishes the generated `dist` directory.

The site is configured in [netlify.toml](netlify.toml); the main page and its content live in [src/pages/index.astro](src/pages/index.astro), with shared styling in [src/styles/global.css](src/styles/global.css).

## Local development

Install dependencies and start the Astro development server:

```bash
npm install
npm run dev
```

To preview the production build locally:

```bash
npm run build
npm run preview
```

## Quality checks

Run the Astro diagnostics and production build before deployment:

```bash
npm run check
npm run build
```

## Contact

Project inquiries can be sent to [contact@dezolent.com](mailto:contact@dezolent.com).
