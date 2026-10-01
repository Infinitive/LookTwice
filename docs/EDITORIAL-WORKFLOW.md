# Editorial workflow

Each content file moves through one of six statuses:

1. `idea` — captured, not yet developed
2. `drafting` — being written
3. `revising` — complete enough to edit
4. `ready` — approved and waiting to publish
5. `published` — public on LookTwice
6. `archived` — retained in the repository but not public

Active work (`idea`, `drafting`, `revising`, `ready`) must include `nextAction`. The build fails if it does not.

Optional workflow fields:

- `blockedBy`: the concrete obstacle
- `editorialNote`: private guidance for the piece
- `related`: links to other content using `collection/id`
- `homepage: true`: selects the single homepage item for its collection

Only one published entry in each collection may have `homepage: true`. The build fails if duplicates exist.

## Generate the private dashboard

Run:

```bash
npm run editorial
```

Then open `.editorial/dashboard.html` in a browser. The `.editorial` folder is ignored by Git, excluded from Netlify, and exists only on the local computer.
