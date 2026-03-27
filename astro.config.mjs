import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://superun.example.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  vite: {
    server: {
      host: true,
    },
  },
});
