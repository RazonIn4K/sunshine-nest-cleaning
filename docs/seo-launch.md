# SEO Launch Guide — Sunshine Nest Cleaning

Do these **after** the custom domain is live (see `PROJECT_NEXT_STEPS.md`), so everything is verified against the canonical `https://www.sunshinenestcleaning.com`.

---

## 1. Google Search Console (GSC)

Open <https://search.google.com/search-console>.

### Option A — Domain property (recommended; covers http/https + www/apex)
1. Add property → **Domain** → enter `sunshinenestcleaning.com`.
2. Google gives you a **TXT record**. Add it at **Unstoppable Domains** DNS:
   ```
   Type: TXT   Host: @   Value: google-site-verification=XXXXXXXXXXXX
   ```
3. Click **Verify** (DNS can take a few minutes to ~1 hour).

### Option B — URL-prefix property (faster, simplest)
1. Add property → **URL prefix** → `https://www.sunshinenestcleaning.com`.
2. Verify via the **HTML tag** method: Google gives a `<meta name="google-site-verification" ...>` tag.
   Add it to `public/index.html` `<head>` (just below the other meta tags), then redeploy:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXX">
   ```

> Tip: Option A (Domain) is the better long-term choice. Option B is handy if you can't edit DNS quickly.

### Submit the sitemap
GSC → **Sitemaps** → enter:
```
sitemap.xml
```
(Full URL: `https://www.sunshinenestcleaning.com/sitemap.xml`.) `robots.txt` already references it.

### Request indexing
GSC → **URL Inspection** → paste `https://www.sunshinenestcleaning.com/` → **Request indexing**.

---

## 2. Validate structured data (Rich Results Test)

Open <https://search.google.com/test/rich-results> and test the live URL
`https://www.sunshinenestcleaning.com/`.

Expect two valid items:
- **`HouseCleaningService`** (LocalBusiness-type) — business info, areaServed, service catalog
- **`FAQPage`** — the 5 FAQs (eligible for FAQ rich results)

If you change FAQ wording on the page, keep the `FAQPage` JSON-LD in `index.html` in sync (Google requires the structured data to match the visible text).

Also useful: <https://validator.schema.org> (paste the homepage URL or source).

---

## 3. Bing (optional, low effort)

<https://www.bing.com/webmasters> → add site → **import from Google Search Console** (one click once GSC is set up) → submit the same sitemap.

---

## 4. On-page SEO already in place (no action needed)

- ✅ Title (53 chars) + meta description (155 chars), DeKalb-focused
- ✅ `rel=canonical` → `https://www.sunshinenestcleaning.com/`
- ✅ Open Graph + Twitter card with a 1200×630 `og-image.png`
- ✅ `HouseCleaningService` + `FAQPage` JSON-LD
- ✅ `sitemap.xml` + `robots.txt` (allows all, points to sitemap)
- ✅ Single `<h1>`, semantic sections, all images have `alt`
- ✅ Mobile-responsive, WCAG 2.0/2.1 A+AA clean (0 axe-core violations)

---

## 5. Ongoing (after launch)

- Add the **Google Business Profile** (see `marketing/google-business-profile.md`) — for a local service business this drives more traffic than the website alone.
- Once GBP + social pages exist, add their URLs to the JSON-LD `sameAs` array in `index.html`.
- Earn reviews naturally; don't add "rated"/review claims to the site until they're real.
- Re-run the Rich Results Test after any major copy change.
