// const prepareParts = require('peritext-rendering-utils').prepareDynamicParts;
const writeFileSync = require('fs').writeFileSync;
const readFileSync = require('fs').readFileSync;

const utils = require('peritext-rendering-utils');
const prepareParts = utils.prepareDynamicParts;


let prefix = './mockData/';
const story = require(prefix + 'story')
prefix += 'generated/';

const parts = prepareParts(story);

Object.keys(parts).map(name => {
  const data = JSON.stringify(parts[name]);
  console.log('writing', prefix + name + '.json');
  writeFileSync(prefix + name + '.json', data);
})

const generatePdf = require('peritext-generator-pdf');
const generateEpub = require('peritext-generator-epub');
const template = require('peritext-template-codex-garlic');
const staticCss = readFileSync('node_modules/peritext-template-codex-garlic/dist/main.css');
const exampleLocale = require('./defaultLocales');


const contextualizers = {
  bib: require('peritext-contextualizer-bib'),
  glossary: require('peritext-contextualizer-glossary'),
  video: require('peritext-contextualizer-video'),
  embed: require('peritext-contextualizer-embed'),
  image: require('peritext-contextualizer-image'),
  table: require('peritext-contextualizer-table'),
  dicto: require('peritext-contextualizer-dicto'),
  webpage: require('peritext-contextualizer-webpage'),
  'data-presentation': require('peritext-contextualizer-data-presentation'),
};
console.log('generating pdf ...');
generatePdf({
  story: story,
  contextualizers,
  template: template,
  locale: exampleLocale,
  additionalStylesheets: [staticCss],
  outputDirPath: prefix
});
console.log('... done');
console.log('generating epub ...');
generateEpub({
  story: story,
  contextualizers,
  template: template,
  locale: exampleLocale,
  additionalStylesheets: [staticCss],
  outputDirPath: prefix
});
console.log('... done');
