# Kerala Plan · State Planning Board — website mockup

A government-portal style website for the State Planning Board's **Kerala Plan** citizen-participation
platform. All text comes from the Kerala Plan reference page (`Kerala_Plan_3.html`).

## Pages

| File | Content |
| --- | --- |
| `index.html` | Home: latest-notice ticker, hero, quick-access tiles, about the Board and leadership, key figures, news & notices (tabs), Five-Year/Annual Plans, divisions, publications, Kerala Plan, important links |
| `about.html` | About the Board, functions, Board members, divisions, history |
| `plans.html` | 14th and 15th Five-Year Plans, Annual Plans, decentralised planning, monitoring & evaluation |
| `publications.html` | Economic Reviews, plan documents, working group reports, evaluation studies (filter + search) |
| `notices.html` | News & events, circulars & orders, tenders, recruitment |
| `contact.html` | Address, phone, enquiry form, Right to Information |
| `forum.html` | Kerala Plan citizen discussions (from the Kerala Plan page) |

Shared header, footer and content (notices, publications, divisions, links) are in `assets/common.js`;
styles in `assets/gov.css`.

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
- Kerala Plan discussions are saved in the visitor's browser (`localStorage`); connect a real backend to go live
