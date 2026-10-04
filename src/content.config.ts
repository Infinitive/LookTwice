import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const workflow = z.enum(['idea','drafting','revising','ready','published','archived']);
const shared = z.object({
  title: z.string().min(1), summary: z.string().min(1).max(260),
  published: z.coerce.date().optional(), updated: z.coerce.date(),
  status: workflow.default('idea'), homepage: z.boolean().default(false),
  sortOrder: z.number().int().nonnegative().default(100),
  nextAction: z.string().max(180).optional(), blockedBy: z.string().max(180).optional(),
  editorialNote: z.string().max(500).optional(), related: z.array(z.string()).default([])
});
const story = defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/story'}),schema:shared.extend({place:z.string().optional(),period:z.string().optional()})});
const notes = defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/notes'}),schema:shared.extend({noteType:z.enum(['finished','unfinished','fragment']).default('unfinished')})});
const things = defineCollection({loader:glob({pattern:'**/*.{md,mdx}',base:'./src/content/things'}),schema:shared.extend({category:z.enum(['watching','listening','doing']),creator:z.string().optional(),year:z.union([z.string(),z.number()]).optional()})});
export const collections={story,notes,things};
