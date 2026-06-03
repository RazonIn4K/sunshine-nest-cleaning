# Sunshine Nest Cleaning — Project Next Steps

## 1. GitHub repository

Create a new repository named:

```text
sunshine-nest-cleaning
```

Recommended options:

- Visibility: Public is okay for a static business site; Private is fine too.
- Do not initialize with README if you plan to upload this starter package directly.
- Default branch: `main`

## 2. Push this starter package

From the unzipped project folder:

```bash
git init
git add .
git commit -m "Initial Sunshine Nest Cleaning website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sunshine-nest-cleaning.git
git push -u origin main
```

Or with GitHub CLI:

```bash
gh repo create sunshine-nest-cleaning --public --source=. --remote=origin --push
```

## 3. Netlify project

Use the existing Netlify project:

```text
sunshine-nest-cleaning
```

Build settings:

```text
Build command: leave blank
Publish directory: public
```

Then connect the GitHub repo in Netlify so future pushes auto-deploy.

## 4. Unstoppable DNS records

Current DNS should stay with Unstoppable Domains.

Add these production web records:

```text
A      @      75.2.60.5
CNAME  www    sunshine-nest-cleaning.netlify.app
```

If Unstoppable does not allow `CNAME` for `www` while an old `A www` exists, delete the old `A www` first.

## 5. Email forwarding records

Recommended public email:

```text
info@sunshinenestcleaning.com
```

Destination inbox:

```text
your-private-inbox@example.com   (real address kept in local-only dns-records.txt)
```

Forward Email DNS records:

```text
MX   @   0   mx1.forwardemail.net
MX   @   0   mx2.forwardemail.net
TXT  @       forward-email=your-private-inbox@example.com
TXT  @       v=spf1 a include:spf.forwardemail.net include:_spf.google.com -all
```

Privacy note: the free DNS-based forwarding setup can expose the destination Gmail in public DNS. Use a paid/private setup if that matters.

## 6. Netlify Forms

The quote form in `public/index.html` already includes:

```html
data-netlify="true"
```

After the first production deploy, open Netlify Forms and submit a test request.

## 7. Launch checklist

- [ ] Confirm `https://www.sunshinenestcleaning.com` loads
- [ ] Confirm root domain redirects properly
- [ ] Confirm HTTPS certificate is active
- [ ] Submit quote form test
- [ ] Confirm form submission appears in Netlify
- [ ] Confirm `info@sunshinenestcleaning.com` forwards to Gmail
- [ ] Configure Gmail “Send mail as”
- [ ] Add Google Search Console
- [ ] Create Google Business Profile
- [ ] Confirm exact service area and business hours
- [ ] Add real photos/testimonials when available
