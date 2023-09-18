import * as process from "process";
import {defineConfig} from "vite";

module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? '/matse-links/'
        : '/test'
});