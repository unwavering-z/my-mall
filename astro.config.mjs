import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 彻底精简，只保留 Starlight 核心
  integrations: [
    starlight({
      title: '2026年春节团购',
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});