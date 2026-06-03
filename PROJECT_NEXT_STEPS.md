# Sunshine Nest Cleaning — Launch Status & Next Steps

_Last updated: 2026-06-03_

## ✅ Done

- **Repo:** https://github.com/RazonIn4K/sunshine-nest-cleaning (`main`)
- **Deployed:** https://sunshine-nest-cleaning.netlify.app (Netlify project `sunshine-nest-cleaning`, publishes `public/`, no build command)
- **Content:** DeKalb-centered bilingual (EN/ES) site — hero, trust bar, services, "Perfect for", "What's included", service areas, FAQ, quote form
- **SEO:** DeKalb title/meta/OG, `og-image.png` (1200×630), `HouseCleaningService` + `FAQPage` JSON-LD, sitemap, robots
- **Quality:** independent code review (passed), live axe-core WCAG 2.0/2.1 A+AA audit = 0 violations (EN + ES)
- **Forms:** `quote` form detected by Netlify with all fields + honeypot; test submissions (EN + ES + direct POST) all captured correctly, then deleted
- **HTTPS/security headers:** active on the `.netlify.app` URL (HSTS, X-Frame-Options, etc. via `netlify.toml`)
- **Apex DNS:** `A @ → 75.2.60.5` already present at Unstoppable

## 🔑 Remaining: custom-domain cutover (manual — dashboards)

The site is live on `*.netlify.app`. To serve the real domain (`www.sunshinenestcleaning.com`, which the canonical + og:image URLs already use):

### Step 1 — Add the missing DNS record at Unstoppable Domains

Apex `A @ → 75.2.60.5` is already set. Add:

```text
Type: CNAME   Host: www   Value: sunshine-nest-cleaning.netlify.app   TTL: 1 Hour
```

If Unstoppable blocks a `CNAME` on `www` while an old `A www` exists, delete the old `A www` first.

### Step 2 — Add the domain to the Netlify site (this is the part that makes the apex serve)

Netlify → site `sunshine-nest-cleaning` → **Domain management → Add a domain** → `sunshinenestcleaning.com`.

- Add both `sunshinenestcleaning.com` and `www.sunshinenestcleaning.com`.
- **Set `www.sunshinenestcleaning.com` as the primary domain** (matches the site's canonical URLs).
- Netlify auto-provisions the Let's Encrypt certificate once it detects the DNS above.

> Note: the apex A record alone is not enough — until the domain is added here, the apex resolves to Netlify's IP but returns no TLS.

### Step 3 — Verify (after propagation, ~minutes to ~1 hour)

- `https://www.sunshinenestcleaning.com` loads with a valid certificate
- apex `sunshinenestcleaning.com` 301-redirects to `www`
- re-submit the quote form once from the real domain and confirm it appears in Netlify Forms

## Optional follow-ups (not blocking)

### Continuous deploy (recommended)

Deploys are currently manual. To auto-deploy on every push:
Netlify → site → **Site configuration → Build & deploy → Link repository** → connect `RazonIn4K/sunshine-nest-cleaning` (build command blank, publish dir `public`).

### Email forwarding (`info@sunshinenestcleaning.com`)

Not set up yet (no MX/TXT records exist). When ready, add at Unstoppable — real destination inbox is in the **git-ignored** `dns-records.txt`:

```text
MX   @   0   mx1.forwardemail.net
MX   @   0   mx2.forwardemail.net
TXT  @       forward-email=<destination-inbox>
TXT  @       v=spf1 a include:spf.forwardemail.net include:_spf.google.com -all
```

Privacy note: free DNS-based forwarding exposes the destination address in public DNS. Use a paid/private setup if that matters. Then configure Gmail "Send mail as".

### Content / growth

- Confirm exact service radius and the towns to name publicly
- Add business hours (then add `openingHoursSpecification` to the JSON-LD)
- Add real photos / testimonials when available (do **not** add insured/bonded/reviews/guarantee claims until verified)
- Add Google Search Console + Google Business Profile

## Launch checklist

- [x] Repo created and pushed
- [x] Deployed to Netlify (`.netlify.app`)
- [x] HTTPS active on the Netlify URL
- [x] Quote form detected + test submission captured in Netlify Forms
- [x] Accessibility + SEO verified on the live page
- [ ] `CNAME www` added at Unstoppable
- [ ] Domain added to the Netlify site (`www` primary)
- [ ] `https://www.sunshinenestcleaning.com` loads with HTTPS
- [ ] Apex redirects to `www`
- [ ] Email forwarding configured (or intentionally deferred)
- [ ] (Optional) GitHub → Netlify continuous deploy linked
- [ ] Google Search Console + Business Profile
- [ ] Real photos / confirmed hours / service radius
