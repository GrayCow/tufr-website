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

News comes from the Pitwall newsletter on Buttondown, so you write each update once.

1. In Buttondown, write your email and send it (or schedule it).
2. Within about five minutes it shows on the News page and the homepage "Latest News", newest first. Each card shows a short text preview. "Read more" opens the full email on the page, including bold and italic text, headings, lists, links, buttons, and photos. A "Read the full update" link goes to the email on Buttondown.

Email formatting is cleaned on the server before it is shown (`api/news.js`). Only simple formatting, secure (`https`) links, and secure images are kept. Scripts, embedded content, and inline styles are removed.

Notes:
- Only sent issues appear. Drafts and scheduled emails that have not gone out yet do not.
- The site reads the public feed at `https://buttondown.com/TUFR/rss` through `api/news.js`. No key or password is involved.
- Until the first email is sent, the News page says "No updates yet". While previewing the site locally (`python3 -m http.server`), the News page shows "We couldn't load updates right now" because `api/news.js` only runs on Vercel.

## Adding gallery photos

The About page gallery shows placeholders until you add photos.

1. Shrink each photo first, for example `sips -Z 1600 -s format jpeg -s formatOptions 70 original.jpg --out photos/gallery/name.jpg`.
2. In `data.js`, add a line to `galleryPhotos`: `{ src: "photos/gallery/name.jpg", caption: "Optional caption" }`.
