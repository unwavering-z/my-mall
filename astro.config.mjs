import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 删掉了 adapter 和 output: 'server'
  integrations: [
    starlight({
      title: '2026春礼展示',
      viewTransitions: true, 
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});