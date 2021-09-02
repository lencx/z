import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash'],
          react: [
            'react',
            'react-dom',
            'react-helmet-async',
            'react-router-dom',
            'recoil',
          ],
          graphql: ['@apollo/client', 'graphql'],
        },
      },
    },
  },
});
