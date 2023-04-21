/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/2022-F2E_week1_React/',
  /*
  optimizeDeps: {
    exclude: ['sweetalert2'],
    // fix weird Vite error "outdated optimize dep"
    // ref: https://stackoverflow.com/questions/75883720/504-outdated-optimize-dep-while-using-react-vite
    // !!! still not work
  },
  */
});
