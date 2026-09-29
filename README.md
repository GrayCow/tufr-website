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

## Posting news

News comes from a Google Sheet, so you can post without touching the code.

**One-time setup**

1. In Google Sheets, create a new sheet and choose File > Import > Upload, then pick `docs/news-sheet-template.csv` (or type these headers in row 1: `Date`, `Type`, `Title`, `Message`).
2. Choose File > Share > Publish to web. Under "Link", pick the news tab and the format **Comma-separated values (.csv)**, then click Publish and copy the link.
3. Paste that link between the quotes of `newsSheetUrl` at the top of `data.js` and save.

**Each time you post**

Add a new row: Date (like `Oct 5, 2026`), Type (like `Monthly` or `Announcement`), Title, and Message. The site shows newest first and updates within a few minutes. Keep the header row and do not rename the columns. Only give edit access to people who should be able to post.

If the sheet cannot be reached, the site shows the posts saved in `news` in `data.js` instead.
