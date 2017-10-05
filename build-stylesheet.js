const sass = require('node-sass');
const write = require('fs').writeFileSync;
const read = require('fs').readFileSync;
const stylesheetFile = read('./src/garlic.scss', 'utf8');

const stylesheet = sass.renderSync({
    data: stylesheetFile,
    indentedSyntax: true,
    outputStyle : 'compressed'
  }).css.toString();

writeFile('./temp/stylesheet.css', stylesheet);