import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 1. 将丝滑切换放在这里，这是 Astro 5.0 的正确位置
  experimental: {
    viewTransitions: true,
  },
  
  integrations: [
    starlight({
      title: '2026春礼展示',
      // 2. 这里只保留 Starlight 自己的配置
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});