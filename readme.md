# Setup

- Delete if exist:
  - .next
  - dist
  - package-lock.json

# Analytics

- Go to the Umami dashboard, add your website and get your `data-website-id` from the settings tab
- Go to `.env`
- Update `UMAMI_URL` and `UMAMI_SITE_ID`
- Deploy

# Sitemap.xml and Robots.txt

- Update `src/app/sitemap.ts` with your pages
- Update `src/app/robots.ts` with your data
- Deploy

# Package.json

- Update the package.json file with the proper name and author.url
