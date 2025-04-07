// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon()
    ],
    devToolbar: {
        enabled: false
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "src/scss/base/variables" as *;`
                }
            }
        }
    }
});
