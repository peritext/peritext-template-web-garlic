import React, {Component} from 'react';
import PropTypes from 'prop-types';

let ReactPDF;
let PDFDocument;
let PDFPage;
import EpubPlayerWrapper from './EpubPlayerWrapper';

import Layout from './Layout';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

if (inBrowser) {
  ReactPDF = require('react-pdf/build/entry.noworker');
  PDFDocument = ReactPDF.Document;
  PDFPage = ReactPDF.Page;
}

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      })
    }
  }

  onChange = e => {
    const value = e.target.value;
    this.setState({value});
  }

  onBlur = () => {
    this.props.onChange(this.state.value);
  }

  onKeyUp = e => {
    if (e.key === 'Enter') {
      this.props.onChange(this.state.value);
    } else {
      this.props.onKeyUp(e);
    }
  }

  render = () => {
    const {
      value
    } = this.state;
    const {
      onKeyUp
    } = this.props;
    return (
      <input 
        className="pdf-page-input" 
        type="text" 
        value={value} 
        onKeyUp={this.onKeyUp}
        onChange={this.onChange}
        onBlur={this.onBlur}
      />
    )
  }
}

class Dimensio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfPageNumber: 1,
      pdfTotal: 1,
      epubLocation: 0,
      pdfWidth: 100
    }
  }

  componentDidUpdate = (prevProps, prevState, prevContext) => {
    const width = this.context && this.context.dimensions && this.context.dimensions.width;
    const prevWidth = prevContext && prevContext.dimensions && prevContext.dimensions.width;
    if (width && prevWidth && prevWidth !== width) {
      const parentDiv = document.getElementById('pdf-container');
      this.setState({ 
        pdfWidth: parentDiv.clientWidth
      });
    }
  }

  onEpubLocationChange = epubLocation => {
    this.setState({
      epubLocation: epubLocation
    });
  }

  onPdfDocumentLoadSuccess = ({numPages}) => {
    this.setState({
      pdfTotal: numPages
    })
  }

  onPdfPageLoadSuccess = ({pageIndex}) => {
    const parentDiv = document.getElementById('pdf-container');
    this.setState({ 
      pdfPageNumber: pageIndex + 1,
      pdfWidth: parentDiv.clientWidth
    });
  }

  onPdfPrev = () => {
    const {
      pdfPageNumber
    } = this.state;
    this.setState({ 
      pdfPageNumber: pdfPageNumber > 0 ? pdfPageNumber - 1 : pdfPageNumber 
    });
  }

  onPdfNext = () => {
    const {
      pdfPageNumber,
      pdfTotal,
    } = this.state;
    this.setState({ 
      pdfPageNumber: pdfPageNumber < pdfTotal ? pdfPageNumber + 1 : pdfPageNumber 
    });
  }

  onPdfPageInput = txt => {
    const number = +txt;
    if (!Number.isNaN(number) && number >= 1 && number <= this.state.pdfTotal) {
      this.setState({ 
        pdfPageNumber: number
      });
    }
  }

  onPdfPageInputKeyUp = e => {
    const code = e.key;
    if (code === 'ArrowUp') {
      this.onPdfNext();
    }else if (code === 'ArrowDown') {
      this.onPdfPrev();
    }
  }

  render() {
    const {
      state,
      props,
      onPdfDocumentLoadSuccess,
      onPdfPageLoadSuccess,
      onPdfPrev,
      onPdfNext,
      onEpubLocationChange,
      onPdfPageInput,
      onPdfPageInputKeyUp,
      context: {
        locale
      }
    } = this;
    const {
      pdfUrl,
      epubUrl,
      storyTitle,
      jsonUrl,
    } = props;

    const {
      pdfPageNumber,
      pdfTotal,
      epubLocation,
      pdfWidth
    } = state;


    return (
        <section className="main-contents-container">
          {inBrowser && <div className="contents-guttered">
            {pdfUrl && 
              <div className="output-group">
                <h2>{(locale && locale.pdfFormat) || 'Format pdf'}</h2>
                <div 
                  className="player-container pdf-player-container"
                  id="pdf-container"
                >
                  <p className="pdf-nav">
                    <button onClick={onPdfPrev}>{(locale && locale.prevPage) || 'page précédente'}</button> 
                      <span>
                        <ControlledInput 
                          className="pdf-page-input" 
                          type="text" 
                          value={pdfPageNumber} 
                          onChange={onPdfPageInput} 
                          onKeyUp={onPdfPageInputKeyUp}
                        />
                       {(locale && locale.of) || 'de'} {pdfTotal}</span> 
                    <button onClick={onPdfNext}>{(locale && locale.nextPage) || 'page suivante'}</button>
                  </p>
                  <PDFDocument
                      file={pdfUrl}
                      onLoadSuccess={onPdfDocumentLoadSuccess}
                      loading={(locale && locale.loadingPdf) || 'chargement du pdf ...'}
                      noData={(locale && locale.noPdf) || 'pas de pdf à afficher ...'}
                      className="pdf-player"
                  >
                    <PDFPage 
                      className="pdf-page"
                      pageNumber={pdfPageNumber}
                      onLoadSuccess={onPdfPageLoadSuccess}
                      width={pdfWidth}
                    />
                  </PDFDocument>
                  <p>
                    <a className="download-button" href={pdfUrl} download>{(locale && locale.download) || 'télécharger'}</a>
                  </p>
                </div>
              </div>
            }
            {epubUrl && <div className="output-group">
              <h2>{(locale && locale.epubFormat) || 'Format epub'}</h2>
              <div className="player-container epub-player-container">
                
                <EpubPlayerWrapper
                  url={epubUrl}
                  onEpubLocationChange={onEpubLocationChange}
                  storyTitle={storyTitle}
                  epubLocation={epubLocation}
                />
                <p>
                  <a className="download-button" href={epubUrl} download>{(locale && locale.download) || 'télécharger'}</a>
                </p>
              </div>
            </div>}
            {epubUrl && <div className="output-group">
              <h2>{(locale && locale.jsonFormat) || 'Format json'}</h2>
              <div className="player-container">
                <p>
                  <a className="download-button" href={jsonUrl} download>{(locale && locale.download) || 'télécharger'}</a>
                </p>
              </div>
            </div>}
          </div>}
        </section>
    )
  }
}

Dimensio.contextTypes = {
  locale: PropTypes.object,
  dimensions: PropTypes.object,
}


export default ({
  id, 
  query,
  pdfUrl,
  epubUrl,
  storyTitle,
  jsonUrl,
}) => (
  <Layout activeId='dimensio'>
    <Dimensio 
      sectionId={id}  
      pdfUrl={pdfUrl}
      epubUrl={epubUrl}
      storyTitle={storyTitle}
      jsonUrl={jsonUrl}
    />
  </Layout>
)