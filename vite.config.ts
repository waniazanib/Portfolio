import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from 'nitro/vite';

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Add this block to override the Lovable default preset and force a Vercel build
  vite: {
    nitro: {
      preset: 'vercel'
    }
  }
});