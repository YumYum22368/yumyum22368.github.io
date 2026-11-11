# yumyum22368.github.io

My personal portfolio, built with Next.js and Tailwind CSS and deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All content lives in [`data/profile.ts`](data/profile.ts). Add personal projects to the `projects` array.

## Deploy

Every push to `main` builds a static export (`out/`) and deploys it with GitHub Actions.
