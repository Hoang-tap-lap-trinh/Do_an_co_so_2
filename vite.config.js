import { defineConfig } from 'vite';
import path from 'path';
import posthtml from '@vituum/vite-plugin-posthtml';

export default defineConfig({
    plugins: [
        posthtml({
            plugins: {
                'posthtml-doctype': { doctype: 'HTML 5' },
                'posthtml-include': { root: './' }
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});
