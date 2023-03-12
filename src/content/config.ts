// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
  schema: z.object({
    author: z.string().default('Ade Firman F'),
    subtitle: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    published_date: z.string(),
    image: z.string().optional(),
    headline: z.boolean().optional(),
    time_to_read: z.string().default('1 min read'),
    comparision: z.array(z.object({
        name: z.string(),
        age: z.number()
      })).optional()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};