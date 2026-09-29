# TUFR Website

Static site for Trinity University Formula Racing. No build step: open `index.html` or run `python3 -m http.server`.

## Updating each season

Almost everything is edited in one file, `data.js`:

- `season`, `applyUrl`, `email`, `instagram`, `address`: shown across all pages.
- `leadership` and `members`: the current team (Team page).
- `alumni`: past seasons, newest first. At the end of a season, move the current team here.
- `news`: posts for the News page and homepage.
- `sponsorTiers` and `currentSponsors`: sponsor tiers and logos. Put logo files in `photos/`.

Photos go in `photos/`. Compress large images first (for example `sips -Z 1600 -s formatOptions 70 in.jpg --out out.jpg`).
