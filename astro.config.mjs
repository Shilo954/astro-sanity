import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import sanity from "@sanity/astro";

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
  }), react(), sanity()],
  server: {
    port: 3000
  },
  output: "server",
  adapter: vercel()
});