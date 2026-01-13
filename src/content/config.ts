import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// 修正后的语法：必须是 export const docs = ...
export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
};