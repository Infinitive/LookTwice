# Metadata reference

This is the metadata contract for LookTwice entries.

## Shared fields

- `title`: display title; required
- `summary`: short description; required
- `updated`: date the piece was last edited; required
- `status`: one of `idea`, `drafting`, `revising`, `ready`, `published`, `archived`
- `published`: publication date for public entries
- `homepage`: whether the item is the featured entry for its collection
- `sortOrder`: numeric ordering for collection listings
- `nextAction`: required for active items
- `blockedBy`: concrete blocker, optional
- `editorialNote`: private note, optional
- `related`: list of collection/id references, such as `notes/ordinary-places`

## Collection-specific fields

### Story

- `place`: place or region described
- `period`: historical or emotional time frame

### Notes

- `noteType`: `finished`, `unfinished`, or `fragment`

### Things

- `category`: `watching`, `listening`, or `doing`
- `creator`: creator or artist when relevant
- `year`: release year or relevant date

The content validator fails when required metadata is absent or inconsistent.
