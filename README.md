# Kerala State Planning Board — website mockup

A static redesign mockup for the Kerala State Planning Board (spb.kerala.gov.in), built on the visual
language and content of the *Kerala Plan* citizen-participation page (backwater green, kasavu gold,
Bricolage Grotesque + Noto Sans / Noto Sans Malayalam).

## Pages

| File | Content |
| --- | --- |
| `index.html` | Home: hero, key figures, important updates, question of the week, what the Board does, topics, latest publications |
| `about.html` | Mandate, functions, Board structure, divisions, history |
| `plans.html` | 14th Five-Year Plan, Annual Plans, Economic Review, decentralised planning, monitoring, evaluation |
| `publications.html` | Filterable, searchable publications library |
| `updates.html` | Notices, consultations, deadlines, results, tenders |
| `participate.html` | **Kerala Plan · Have your say** forum (posts, votes, threaded comments, Official Board replies) |
| `contact.html` | Contact form, office address, RTI |

Shared header, footer and content data live in `assets/site.js`; styles in `assets/style.css`.
Light and dark themes are supported (follows the system, with a toggle in the top bar).

## Running

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Before launch

- The forum stores posts in the browser (`localStorage`) for demo purposes. Replace `LocalDB` in
  `participate.html` with a real backend; it uses the same `collection().add / doc().set / delete /
  onSnapshot` API as the original Kerala Plan page.
- Notices and publications in `assets/site.js` are sample entries; replace them with real ones and link
  the PDFs.
- Names of the Vice Chairperson, members and Member Secretary, phone numbers, email addresses and RTI
  officers are deliberately left as placeholders; fill them from the official notification and directory.
- The old site could not be reached while this mockup was built, so its menu and text should be checked
  against it.
