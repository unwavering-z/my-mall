import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export collection const docs = defineCollection({
	schema: docsSchema(),
});