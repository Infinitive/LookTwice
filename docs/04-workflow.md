# Workflow

Each content file moves through a status before it becomes public.

- `idea`: captured but not yet developed
- `drafting`: actively being written
- `revising`: complete enough to edit carefully
- `ready`: approved and waiting to publish
- `published`: public on the site
- `archived`: retained but not shown

## Required fields while active

Any item in `idea`, `drafting`, `revising`, or `ready` must include `nextAction`.

This is enforced by the validation script:

```bash
npm run validate:content
```

The validation script also checks for:

- invalid status values
- missing title or updated date
- published entries without a published date
- homepage duplicates per collection
- broken related references

The editorial dashboard can help visualize active work:

```bash
npm run editorial
```
