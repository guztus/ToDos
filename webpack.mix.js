const mix = require('laravel-mix');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build stepsF
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const CompressionPlugin = require('compression-webpack-plugin');

mix.webpackConfig({
    plugins: [
        // reduce bundle size by ignoring moment js local files
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$|\.svg$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ]
});

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps(true);
