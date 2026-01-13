import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 1. 强制设置尾随斜杠行为，解决 404 常见病根
  trailingSlash: 'always',
  
  // 2. 开启视图过渡
  viewTransitions: true,
  
  integrations: [
    starlight({
      title: '2026春节展示',
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});