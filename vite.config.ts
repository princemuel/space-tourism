// vite.config.js
const { resolve } = require('path');
const { defineConfig } = require('vite');

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        crew: resolve(__dirname, 'pages/crew.html'),
        destination: resolve(__dirname, 'pages/destination.html'),
        technology: resolve(__dirname, 'pages/technology.html'),
      },
    },
  },
});
