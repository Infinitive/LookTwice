import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shared = z.object({
  title: z.string().min(1),
  summary: z.string().min(1).max(240),
  published: z.coerce.date(),
  updated: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  sortOrder: z.number().int().nonnegative().default(100)
});

const story = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/story' }),
  schema: shared.extend({
    place: z.string().optional(),
    period: z.string().optional()
  })
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: shared.extend({
    status: z.enum(['finished', 'unfinished', 'fragment']).default('unfinished')
  })
});

const things = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/things' }),
  schema: shared.extend({
    kind: z.enum(['media', 'object', 'practice', 'place', 'food', 'project']),
    creator: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional()
  })
});

export const collections = { story, notes, things };
