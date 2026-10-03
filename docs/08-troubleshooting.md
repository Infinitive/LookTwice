# Troubleshooting

## Duplicate YAML keys

This usually appears when a metadata field is typed twice in a frontmatter block.

Example:

```yaml
nextAction: "Write the opening"
nextAction: "Revise the section headings"
```

Only one value is allowed for each field.

## Missing published date

A public item must include `published` when `status: published` is set.

## Homepage crash

This happens when a collection has more than one published entry marked as `homepage: true` or when a homepage item is missing entirely for a collection that expects one.

## Broken relationship references

If a related reference points to an item that does not exist, the content validator will fail with the collection/id pair that is missing.

## Content validation failure

Run:

```bash
npm run validate:content
```

and fix the exact issues reported there before publishing.
