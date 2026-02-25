import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production')
    },
    base: '/game-app/',
    server: {
        port: 5174,
        proxy: {
            '/api': 'http://localhost:3000',
            '/socket.io': {
                target: 'http://localhost:3000',
                ws: true
            }
        }
    },
    build: {
        outDir: resolve(__dirname, '../game-app'),
        emptyOutDir: true,
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, 'src/main.jsx'),
            formats: ['es'],
            fileName: () => 'main.js'
        },
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name][extname]'
            }
        }
    }
});
