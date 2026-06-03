# Sunshine Nest Cleaning

A bilingual English/Spanish starter website for Sunshine Nest Cleaning.

## What this includes

- Static Netlify-ready site
- Bilingual copy and language toggle
- Netlify Forms quote request form
- Click-to-call phone links for `815-981-1787`
- Public business email placeholder: `info@sunshinenestcleaning.com`
- SEO basics: sitemap, robots.txt, metadata
- Deployment config via `netlify.toml`

## Local preview

Because this is a static site, you can open `public/index.html` directly in your browser.

For a local server:

```bash
python3 -m http.server 8080 --directory public
```

Then open:

```text
http://localhost:8080
```

## Netlify setup

Netlify project already planned:

```text
Project name: sunshine-nest-cleaning
Default URL: https://sunshine-nest-cleaning.netlify.app
Publish directory: public
Build command: leave blank
```

## Suggested production domain setup

Use:

```text
www.sunshinenestcleaning.com
```

as the primary public website, with:

```text
sunshinenestcleaning.com
```

redirecting to `www`.

## Important edits before launch

Search the project for `TODO` and update:

- exact service area
- business hours
- whether supplies are included
- whether the business is insured/bonded
- final email forwarding setup
- final Google Business Profile link once created
