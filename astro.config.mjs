import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 1. Astro 的功能写在这里
  experimental: {
    viewTransitions: true,
  },
  
  integrations: [
    starlight({
      title: '2026年春节团购',
      // 2. Starlight 的功能写在这里
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});