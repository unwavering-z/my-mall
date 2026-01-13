import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import edgeone from '@edgeone/astro';

export default defineConfig({
  // 使用腾讯云 EdgeOne 适配器
  adapter: edgeone(),
  output: 'server', // 边缘计算模式
  integrations: [
    starlight({
      title: '2026春礼展示',
      // 开启类似 Leaflet 的丝滑左右切换效果
      viewTransitions: true, 
      logo: {
        src: './src/assets/logo.svg', // 之后可以替换你的 Logo
      },
      sidebar: [
        {
          label: '产品分类',
          // 自动抓取 products 文件夹下的品牌
          autogenerate: { directory: 'products' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});