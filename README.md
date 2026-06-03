# Sunshine Nest Cleaning

Bilingual (English/Spanish) website for Sunshine Nest Cleaning — local, family-owned house cleaning in DeKalb, IL and nearby DeKalb County communities.

- **Live:** https://sunshine-nest-cleaning.netlify.app
- **Custom domain (pending DNS cutover):** https://www.sunshinenestcleaning.com

See [`PROJECT_NEXT_STEPS.md`](PROJECT_NEXT_STEPS.md) for launch status and the remaining domain cutover steps.

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

## Before publishing the custom domain

See [`PROJECT_NEXT_STEPS.md`](PROJECT_NEXT_STEPS.md) for the exact DNS + Netlify domain steps. Still open:

- confirm exact service radius / which towns to name publicly
- business hours (then add `openingHoursSpecification` to the JSON-LD)
- final email forwarding setup
- Google Business Profile link once created

**Copy rule:** do not add insured / bonded / background-checked / reviews / guarantee / years-in-business claims until they are verified. The current copy intentionally uses only safe, provable claims (local & family-owned, bilingual, free quotes, flexible scheduling).
