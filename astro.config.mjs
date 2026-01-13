import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // 1. 明确告诉 Astro 这是一个静态站点
  output: 'static',
  
  // 2. 重新激活 Starlight 引擎
  integrations: [
    starlight({
      title: '2026年春节团购',
      // 开启实验性视图过渡（虽然是可选的，但让页面切换很丝滑）
      viewTransitions: true,
      sidebar: [
        {
          label: '产品分类',
          // 确保这一行在，它会自动扫描 src/content/docs/products 目录
          autogenerate: { directory: 'products' },
        },
      ],
    }),
  ],
});