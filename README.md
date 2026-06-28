# J.P. Burnham Drywall Website

A responsive multi-page static website built for **J.P. Burnham Drywall** in Buxton, Maine.

## Files
- `index.html` — Home page
- `services.html` — Residential, commercial, repair, and finish services
- `projects.html` — Project gallery page
- `about.html` — Business background and values
- `contact.html` — Quote request form
- `assets/js/site-config.js` — the only file you need to edit for your phone number, email, and service area
- `assets/images/jp-burnham-drywall-logo.png` — cropped logo used across the site

## First: update the real contact information
Open `assets/js/site-config.js` and replace:
- `phoneDisplay`
- `phoneHref`
- `email`
- `googleMapsUrl` (optional)

## Quote form
The quote form is already configured for **Netlify Forms**.

To turn it on:
1. Create a free Netlify account.
2. Drag this entire project folder into Netlify's "Deploy manually" area, or upload the ZIP.
3. Open Netlify → Forms → quote-request.
4. Add your notification email inside Netlify's form settings.

This means you do not need a separate form service or any custom backend.

## Replace gallery photos
The gallery currently contains professional placeholder images. Before publishing:
1. Put your actual completed-job photos in `assets/images/`.
2. Replace the remote image URLs inside `projects.html` with your filenames.
3. Update the `alt` text so it describes each photo accurately.

## Publishing options
- **Easiest / form ready:** Netlify
- **Free static hosting:** GitHub Pages
- **Other options:** Vercel, Cloudflare Pages, or any normal web host

## Important
The website says the business has been operating for 20+ years because that was provided. It does **not** claim licensing, insurance, certifications, warranties, or specific phone/email details—add only claims that are accurate for the business.
