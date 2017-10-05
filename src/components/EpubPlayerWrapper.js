import React, {Component} from 'react';
import {ReactReader} from 'react-reader'

export default class EpubPlayerWrapper extends Component {
  constructor(props) {
    super(props);
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.url !== nextProps.url
  }

  onRenditionSelection = (cfiRange, contents) => {
    // console.log('Selection was created', cfiRange, contents)
    contents.mark(cfiRange, {}, (e) => {
      // console.log('You clicked the selection')
    })
    contents.highlight(cfiRange)
    contents.window.getSelection().removeAllRanges()
  }

  getRendition = (rendition) => {
    rendition.on('selected', this.onRenditionSelection)
    rendition.themes.default({
      '::selection': {
        'background': 'rgba(255,255,0, 0.3)'
      },
      '.epubjs-hl': {
        'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
      },
      'p': {
        'padding': '0 20px 0 0',
        'text-align': 'left',
        'position': 'relative'
      },
      '[ref="epubjs-mk"]::before': {
        'content': '""',
        'background': 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNzUgNzUnPjxnIGZpbGw9JyNCREJEQkQnIGlkPSdidWJibGUnPjxwYXRoIGNsYXNzPSdzdDAnIGQ9J00zNy41LDkuNEMxOS42LDkuNCw1LDIwLjUsNSwzNC4zYzAsNS45LDIuNywxMS4zLDcuMSwxNS42TDkuNiw2NS42bDE5LTcuM2MyLjgsMC42LDUuOCwwLjksOC45LDAuOSBDNTUuNSw1OS4yLDcwLDQ4LjEsNzAsMzQuM0M3MCwyMC41LDU1LjQsOS40LDM3LjUsOS40eicvPjwvZz48L3N2Zz4=") no-repeat',
        'display': 'block',
        'right': '0',
        'position': 'absolute',
        'width': '20px',
        'height': '20px',
        'margin': '0',
        'cursor': 'pointer'
      }
    })
  }

  render = () => {
    const {
      url,
      onEpubLocationChange,
      storyTitle,
      epubLocation
    } = this.props;
    const {
      getRendition
    } = this;
    return (
      <div className="epub-player-wrapper" style={{
        position: 'relative', width:'100%', height: '50em'
      }}>
        {
          <div
            className="epub-player-container"
          >
            <ReactReader 
              url={url} 
              title={storyTitle}
              location={epubLocation}
              locationChanged={onEpubLocationChange}
              getRendition={getRendition}
            />
          </div>
        }
      </div>
    )
  }
}