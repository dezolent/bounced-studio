import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bounced.studio',
  output: 'static',
  build: {
    format: 'file',
  },
});
