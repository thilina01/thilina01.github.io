import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import site from './src/data/site.json';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: `${site.title} - ${site.jobTitle}`,
          description: site.description,
          author: site.author,
          ogTitle: `${site.title} - ${site.jobTitle}`,
          ogDescription: site.ogDescription,
          ogImage: `https://${site.domain}${site.previewImage}`,
          ogUrl: `https://${site.domain}`,
          twitterTitle: `${site.title} – ${site.jobTitle}`,
          twitterDescription: site.twitterDescription,
          twitterImage: `https://${site.domain}${site.previewImage}`,
          twitterSite: site.twitter.site,
          twitterCreator: site.twitter.creator,
          canonical: `https://${site.domain}/`,
          goatcounterScript: site.analytics?.goatcounter || ''
        }
      }
    })
  ],
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/dist/**'],
      usePolling: true,
      interval: 100
    },
    port: 3000,
    host: true
  }
});
