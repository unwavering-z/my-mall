import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '2026年春节团购',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        // 手动定义品牌分类
        {
          label: '感恩册',
          link: '/', // 首页即是感恩册
        },
        {
          label: '悦享册',
          link: '/products/yuexiang/', // 指向尚未创建的悦享册页面
        },
        {
          label: '集祥礼',
          link: '/products/jixiang/',
        },
      ],
    }),
  ],
});