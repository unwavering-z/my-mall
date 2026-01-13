import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import edgeone from '@edgeone/astro';

export default defineConfig({
  // 适配器配置
  adapter: edgeone(),
  output: 'server', 
  
  integrations: [
    starlight({
      title: '2026春礼展示',
      // 开启丝滑切换效果
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