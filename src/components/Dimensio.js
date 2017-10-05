import React, {Component} from 'react';
import PropTypes from 'prop-types';

let ReactPDF;
import EpubPlayerWrapper from './EpubPlayerWrapper';

import Layout from './Layout';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

if (inBrowser) {
  ReactPDF = require('react-pdf');
}

export default class Dimensio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfPageNumber: 1,
      pdfTotal: 1,
      pdfPageIndex: 0,
      epubLocation: 0,
    }
  }

  onEpubLocationChange = epubLocation => {
    this.setState({
      epubLocation: epubLocation
    });
  }

  onPdfDocumentLoad = ({ total }) => {
    this.setState({
      pdfTotal: total
    })
  }

  onPdfPageLoad = ({pageIndex, pageNumber}) => {
    this.setState({ 
      pdfPageIndex: pageIndex, 
      pdfPageNumber: pageNumber 
    });
  }

  onPdfPrev = () => {
    const {
      pdfPageIndex,
      pdfPageNumber
    } = this.state;
    this.setState({ 
      pdfPageIndex: pdfPageIndex > 0 ? pdfPageIndex - 1 : pdfPageIndex, 
      pdfPageNumber: pdfPageNumber > 0 ? pdfPageNumber - 1 : pdfPageNumber 
    });
  }

  onPdfNext = () => {
    const {
      pdfPageIndex,
      pdfPageNumber,
      pdfTotal,
    } = this.state;
    this.setState({ 
      pdfPageIndex: pdfPageIndex < pdfTotal - 1 ? pdfPageIndex + 1 : pdfPageIndex, 
      pdfPageNumber: pdfPageNumber < pdfTotal ? pdfPageNumber + 1 : pdfPageNumber 
    });
  }

  render() {
    const {
      state,
      props,
      onPdfDocumentLoad,
      onPdfPageLoad,
      onPdfPrev,
      onPdfNext,
      onEpubLocationChange,
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
      pdfPageIndex,
      epubLocation
    } = state;


    return (
      <Layout activeId="dimensio">
        <section className="main-contents-container">
          {inBrowser && <div className="contents-guttered">
            {pdfUrl && 
              <div className="output-group">
                <h2>{(locale && locale.pdfFormat) || 'Format pdf'}</h2>
                <div className="player-container pdf-player-container">
                  <p className="pdf-nav">
                    <button onClick={onPdfPrev}>{(locale && locale.prevPage) || 'page précédente'}</button> <span>{pdfPageNumber} {(locale && locale.of) || 'de'} {pdfTotal}</span> <button onClick={onPdfNext}>{(locale && locale.nextPage) || 'page suivante'}</button>
                  </p>
                  <ReactPDF
                      file={pdfUrl}
                      pageIndex={pdfPageIndex}
                      onDocumentLoad={onPdfDocumentLoad}
                      onPageLoad={this.onPageLoad}
                  />
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
      </Layout>
    )
  }
}

Dimensio.contextTypes = {
  locale: PropTypes.object,
}