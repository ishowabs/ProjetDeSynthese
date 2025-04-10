const mix = require('laravel-mix');
const path = require('path');

mix.js('resources/js/app.jsx', 'public/js')
   .react()
   .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
   ])
   .css('resources/css/auth.css', 'public/css')
   .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js')
            }
        }
   });

// Enable versioning
if (mix.inProduction()) {
    mix.version();
} 