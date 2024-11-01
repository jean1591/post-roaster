# Setup

- Delete if exist:
  - .next
  - dist
  - package-lock.json

# Analytics

- Go to the Umami dashboard, add your website and get your `data-website-id` from the settings tab
- Go to `src/app/layout.tsx`
- Add
  ```javascript
  <Script
    defer
    src="https://replace-this-with-your-website/script.js"
    data-website-id="get-this-from-umami"
  />
  ```
- Deploy

# Sitemap.xml and Robots.txt

- Update `src/app/sitemap.ts` with your pages
- Update `src/app/robots.ts` with your data
- Deploy
