# Kerala Plan · State Planning Board — website mockup

A government-portal style website for the State Planning Board's **Kerala Plan** citizen-participation
platform. All text comes from the Kerala Plan reference page (`Kerala_Plan_3.html`).

## Pages

| File | Content |
| --- | --- |
| `index.html` | Home: hero, topic quick-access tiles, about Kerala Plan, counters, important updates, question of the week, browse by topic, trending now, ideas citizens are backing, replies from the Board, how it works, house rules |
| `forum.html` | Discussions: all posts or one topic (`#water`, `#health`, …), new post (`#new`), votes, threaded comments, Official Board replies |

Shared header, footer, topic data and the data store are in `assets/common.js`; styles in `assets/gov.css`.

## Running

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Demo notes

- Posts, comments, votes and updates are saved in the visitor's browser (`localStorage`). Replace `DB` in
  `assets/common.js` with a real backend to go live; it keeps the same `collection().add / doc().set /
  delete / onSnapshot` API as the original page.
- Tick **Preview as Board staff** in the forum sidebar to publish updates on the home page and post
  Official replies.
