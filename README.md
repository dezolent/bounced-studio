# Bounced

Bounced builds and maintains artist websites, then helps connect and support the digital systems around them. The company is operated by Dezolent, LLC and focuses on the technical side of an artist’s online presence—not traditional artist management, booking, or label services.

## What Bounced does

Bounced works directly with artists or alongside their existing teams. A typical engagement starts with a custom website and can expand into platform connections or ongoing technical support when those services fit the artist’s setup.

Services include:

- **Build your website:** Custom artist sites for releases, shows, merch, biography, and fan actions.
- **Connect your platforms:** Practical connections for supported music and show services, existing stores, branded email, and related accounts.
- **Keep it running:** Optional help with domains, hosting, updates, search foundations, structured data, and ongoing technical upkeep.

Bounced can work with an artist’s existing domain, Google Workspace or other email provider, and current store. Artists and their teams retain ownership of their accounts, and a provider migration is recommended only when it solves a real problem.

Current implementation examples include searchable release catalogs, dedicated release fan-link routes, and private MLC musical-work reviews. Catalog source data and fan-link destinations are reviewed before publication; they are not presented as universally automatic. MLC reports distinguish recordings from musical works and require human review rather than making ownership, royalty, or payment determinations.

ArtistOps—a longer-term vision for a connected dashboard covering shows, releases, website activity, merch, and related artist data—is currently in development. It is not presented as a live product on the public site.

## Selected work

- [Morbeato](https://morbeato.com) — release links, EDMTrain show dates and tickets, a merch-ready section, and photo gallery.
- [Dezolent](https://dezolent.com) — track and album pages, platform fan links, structured music data, and a Sanity-backed journal.
- [Coptr](https://coptr.me) — an artist homepage, latest releases, biography and contact, plus dedicated EPK and fan-link routes.

## Project details

This repository contains the static marketing site for [bounced.studio](https://bounced.studio). It uses [Astro](https://astro.build/) with a single page, semantic HTML, responsive CSS, supplied Bounced wordmarks, and minimal client-side JavaScript. Netlify builds the site from the `main` branch and publishes the generated `dist` directory.

The site is configured in [netlify.toml](netlify.toml); the main page and its content live in [src/pages/index.astro](src/pages/index.astro), with shared styling in [src/styles/global.css](src/styles/global.css). A custom [404 page](src/pages/404.astro) handles retired storefront URLs without redirecting unrelated pages to the homepage. The maintainable public summary at [public/llms.txt](public/llms.txt) is copied to `/llms.txt` during the Astro build.

## Inquiries

The site uses a prefilled email inquiry instead of a web form because this repository does not establish a verified Netlify Forms notification destination. The inquiry asks for an artist or project name, a link, the help needed, and an optional timeline. Visitors can also copy or email `artists@bounced.studio` directly.

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

Project inquiries can be sent to [artists@bounced.studio](mailto:artists@bounced.studio).
