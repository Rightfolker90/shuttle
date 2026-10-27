# Personal dashboard for Shuttle

This package contains your uploaded Shuttle repository with a new homepage.
The homepage includes all 23 uploaded app logos, the school logo, local Poppins fonts,
username-only local personalization, profile settings, expandable Hidden Apps,
Brave Search, and separate internal tabs. The unofficial disclosure remains visible.

## Update your GitHub fork (browser method)

1. Extract this ZIP. Open the `shuttle-main` folder inside it.
2. In your GitHub fork, choose **Add file → Upload files**.
3. Upload `views/layout.ejs`, `views/personal.ejs`, the complete
   `public/personal-assets` folder, and `TEMPLATE_SETUP.md`.
   Preserve their paths: do not upload an extra `shuttle-main` parent folder.
   You can drag the `views` and `public` folders from the extracted root;
   GitHub retains nested paths. Review the paths before committing.
4. Commit the changes. If your host deploys automatically, wait for its deployment.
   Otherwise redeploy the same application/service using your normal hosting flow.
5. Refresh the homepage. Use Ctrl+Shift+R if the old appearance is cached.

## Git method (run from your existing fork checkout)

Copy the modified files listed above into your checkout, preserving paths, then run:

```bash
git add views/layout.ejs views/personal.ejs public/personal-assets TEMPLATE_SETUP.md
git commit -m "Add personal app dashboard frontend"
git push
```

## Run the whole extracted application

Install a supported Node.js version satisfying package.json, then from this folder:

```bash
npm install
npm start
```

Open http://localhost:8080 (or your configured PORT).
Remote hosting must use HTTPS for service workers. Do not deploy this as GitHub Pages:
it requires the Node server and the existing /bare/ and /uv/ endpoints.
If you already deployed this fork on Cloud Run, update that existing service from
this extracted project folder using your existing project, service, and region.

## Behavior and limits

- The display name is local personalization, not authentication or access control.
- Hidden Apps, Brave searches, and other supported sites use the existing
  Ultraviolet service worker and Bare backend. These backend files are unchanged.
- Google, Microsoft, and school account services open through the explicit official-site
  button in the same browser tab to keep sign-in on their own domains.
- Internal app frames remain mounted when switching tabs and are removed when closed.
- AI Chat uses the included browser-based model; availability depends on browser support and model download.
- A proxy is not a VPN. No filtering or monitoring evasion is implemented or guaranteed.
- Website compatibility, video playback, and upstream access depend on the original
  proxy dependencies and the destination site.
- The original /math, /physics, and /settings routes retain their old frontend.

## Changed files

- views/layout.ejs: serves the custom homepage for the root route only.
- views/personal.ejs: complete custom homepage and UV tab adapter.
- public/personal-assets/: supplied logos and locally served fonts.
- TEMPLATE_SETUP.md: these instructions.

Original licensing remains in LICENSE.txt. The UI does not imply school affiliation.

## Games and search

Hidden Apps includes Games, which opens the original Shuttle /math page inside a portal tab. Its game content is hosted by a third party and may be unavailable. The search box uses Brave through Shuttle’s Ultraviolet connection. A proxy does not guarantee privacy or bypass filtering.
