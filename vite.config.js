import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 👈 Add this line
    environment: 'jsdom', // Ensures DOM APIs work
  },
});
