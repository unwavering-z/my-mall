import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '2026年春节团购',
      // 关键：告诉项目去哪里找你的自定义 CSS
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '产品分类',
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});