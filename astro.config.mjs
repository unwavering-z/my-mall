import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '2026年春节团购',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: '感恩册', link: '/' },
        { label: '悦享册', link: '/products/yuexiang/' },
        { label: '集祥礼', link: '/products/jixiang/' },
        { label: '更多好礼', autogenerate: { directory: 'products' } },
      ],
    }),
  ],
});