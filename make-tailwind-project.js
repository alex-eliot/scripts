"use strict";

const fs = require('fs');

const package = require('./package.json');

input = '@tailwind base;\n@tailwind components;\n@tailwind utilities;';

package.scripts = {
    build: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css',
    run: 'npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch'
};

fs.writeFileSync('./package.json', JSON.stringify(package, undefined, '  '));
fs.mkdirSync('./src');
fs.writeFileSync('./src/input.css', input);