import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['cdn.sanity.io']
  },
  vite: {
    server: {
      hmr: {
        path: '/vite-hmr/'
      }
    },
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [tailwind({
    applyBaseStyles: false
  })],
  server: {
    port: 3000
  },
  output: "server",
  adapter: vercel()
});