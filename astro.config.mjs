import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '2026商城展示',
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});