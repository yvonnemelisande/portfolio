// packages
const { Baker } = require('@datagraphics/baker');

const baker = new Baker({
  assets: 'assets',
  data: '_data',
  domain: 'https://yvonnemelisande.github.io/portfolio/_dist',
  entrypoints: 'scripts/app.js',
  input: process.cwd(),
  layouts: '_layouts',
  output: '_dist',
  pathPrefix: 'portfolio/' || '/',
});

module.exports = { baker };
