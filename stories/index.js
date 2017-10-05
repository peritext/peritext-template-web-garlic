import React from 'react';

import merriweather from 'typeface-merriweather';
import roboto from 'typeface-roboto';

import story from '../mockData/story';
import authorsIndex from '../mockData/generated/authorsIndex';
import bibliography  from '../mockData/generated/bibliography';
import citations from '../mockData/generated/citations';
import glossary from '../mockData/generated/glossary';
import exampleLocale from '../defaultLocales';

import '../src/garlic.scss';

import playerStyles from 'quinoa-presentation-player/build/Player.scss';
import scrollerStyles from 'quinoa-presentation-player/build/templates/scroller/ScrollerLayout.scss';
import stepperStyles from 'quinoa-presentation-player/build/templates/stepper/StepperLayout.scss';
import visModules from 'quinoa-vis-modules/build/globals.scss';
import timelineStyle from 'quinoa-vis-modules/build/Timeline/Timeline.scss';
import svgStyle from 'quinoa-vis-modules/build/SVGViewer/SVGViewer.scss';
import networkStyle from 'quinoa-vis-modules/build/Network/Network.scss';
import mapStyle from 'quinoa-vis-modules/build/Map/Map.scss';
import leafletStyle from 'leaflet/dist/leaflet.css';
import dictoStyle from 'peritext-contextualizer-dicto/dist/main.css';

// import dictoStyle from 'dicto-player/dist/main.css';

const pdfUrl = '/generated/' + story.id + '.pdf';
const epubUrl = '/generated/' + story.id + '.epub';
const jsonUrl = '/story.json';

const contextualizers = {
  bib: require('peritext-contextualizer-bib'),
  p5: require('peritext-contextualizer-p5'),
  codefiles: require('peritext-contextualizer-codefiles'),
  vegalite: require('peritext-contextualizer-vegalite'),
  glossary: require('peritext-contextualizer-glossary'),
  video: require('peritext-contextualizer-video'),
  embed: require('peritext-contextualizer-embed'),
  image: require('peritext-contextualizer-image'),
  table: require('peritext-contextualizer-table'),
  dicto: require('peritext-contextualizer-dicto'),
  webpage: require('peritext-contextualizer-webpage'),
  'data-presentation': require('peritext-contextualizer-data-presentation'),
};


const css = Object.keys(contextualizers).map(type => {
  if (!contextualizers[type])
    console.log(type);
  return contextualizers[type] && contextualizers[type].defaultCss
}).join('\n');

import PreviewContainer from '../src/components/PreviewContainer';

import { storiesOf } from '@storybook/react';

storiesOf('Garlic dynamic template', module)
  .add('default', () => 
    <div style={{
      position: 'fixed',
      left: '1%',
      top: '1%',
      width: '98%',
      height: '98%'
    }}>
      <PreviewContainer
        story={story}
        locale={exampleLocale}
        contextualizers={contextualizers}
        authorsIndex={authorsIndex}
        bibliography={bibliography}
        citations={citations}
        glossary={glossary}
        pdfUrl={pdfUrl}
        epubUrl={epubUrl}
        jsonUrl={jsonUrl}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: css
        }}
      />
    </div>
  )
