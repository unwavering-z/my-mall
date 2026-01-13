import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 在 Astro 5.x 中，这已经是正式功能，直接这样写即可
  viewTransitions: true,
  
  integrations: [
    starlight({
      title: '2026端午展示',
      // 这里是 Starlight 的基础配置
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});