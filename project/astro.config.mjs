import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://schwabcoholdings.netlify.app',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' },
});
