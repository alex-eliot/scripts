"use strict";

const fs = require('fs');

const pkg = require('./package.json');

input = '@tailwind base;\n@tailwind components;\n@tailwind utilities;';

pkg.scripts = {
    build: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css',
    watch: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch'
};

fs.writeFileSync('./package.json', JSON.stringify(pkg, undefined, '  '));
fs.mkdirSync('./src');
fs.writeFileSync('./src/input.css', input);