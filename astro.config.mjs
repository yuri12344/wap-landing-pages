import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  compressHTML: false,
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'src/pages/*/images/*.*',
            dest: '.',
            rename: (fileName, fileExtension, fullPath) => {
              const pageName = fullPath.split('/').slice(-3)[0];
              return `${pageName}/images/${fileName}.${fileExtension}`;
            },
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  build: {
    outDir: 'dist',
    inlineStyles: true,
    assetsInlineLimit: 0,
    inlineScripts: true,
  },
});
