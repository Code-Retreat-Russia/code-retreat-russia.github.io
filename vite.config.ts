import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' — чтобы сборка одинаково работала и на github.io, и на собственном домене
export default defineConfig({
  base: './',
  plugins: [react()],
});
