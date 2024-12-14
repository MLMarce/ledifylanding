import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    price: z.string(),
    description: z.string(),
    image: z.string(),
    features: z.array(z.string()),
    isAvailable: z.boolean(),
  }),
});

export const collections = {
  products,
};