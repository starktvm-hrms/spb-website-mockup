# Plan Keralam · State Planning Board — website mockup

A public forum where citizens take part in the Kerala State Planning Board's work, like a Facebook group:
people post suggestions and concerns, and others like, comment on and share them. The Board replies with
Official answers and posts updates. Branded **Plan Keralam — Debate. Discuss. Decide.** Colours follow the reference city-government layout:
forest green `#2F3E37`, sage `#BDCBCE`, sand `#E9DFD3`, taupe `#BDA59B` and coral `#EA917F`. The logo,
hero image and Board posts use the campaign artwork in `assets/img/`.

## Pages

| File | Content |
| --- | --- |
| `index.html` | **The forum.** Hero with topic tiles, Discussion / Board updates / About tabs, topics, composer, feed with Like · Comment · Share, threaded comments, Official Board replies, question of the week |
| `about.html`, `plans.html`, `publications.html`, `notices.html`, `contact.html` | State Planning Board information pages, linked from the footer |
| `forum.html` | Redirects to `index.html` (old links) |

Links inside the forum: `#all`, `#topic/water`, `#post/<id>` (shareable post link), `#updates`, `#about`, `#new`.

Shared header, footer, data store and content are in `assets/common.js`; styles in `assets/gov.css` and
`assets/forum.css`.

## Running

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Verify before launch

The old site (spb.kerala.gov.in) could not be reached while building this, so content comes from public
sources (Wikipedia, the LSGD portal, news reports from 2026). Check these against the Board's records:

- Board members (from news reports of the July 2026 reconstitution); Member Secretary and expert members
- Phone number 0471 254 0208 (from a third-party directory); email address; RTI officers
- Plan sizes (₹37,242 crore in 2022-23; ₹35,750 crore estimated for 2026-27)
- Notices, circulars, tenders and recruitment items are illustrative; PDF links are placeholders
- The forum saves posts, comments, likes and shares in the visitor's browser (`localStorage`) and starts with
  18 sample posts (4 Board posts with campaign posters) (`seedData` in `assets/common.js`). Connect a real backend and sign-in before launch.
- Tick **Preview as Board staff** to post Official replies and publish Board updates.
