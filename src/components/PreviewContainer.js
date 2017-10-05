import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Home from './Home';
import Lexicon from './Lexicon';
import Dimensio from './Dimensio';
import Bibliotheca from './Bibliotheca';
import Section from './Section';

import PreviewLink from './PreviewLink';

export default class PreviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewId: ''
    }
  }

  getChildContext = () => ({
    story: this.props.story,
    activeViewId: this.state.viewId,
    navigateTo: this.navigateTo,
    LinkComponent: PreviewLink,
    contextualizers: this.props.contextualizers,
    rawCitations: this.props.citations,
    locale: this.props.locale,
  })

  navigateTo = (viewId, query) => {
    this.setState({viewId, query})
  }

  renderActiveView = () => {
    switch (this.state.viewId) {
      case 'lexicon':
        return <Lexicon 
                glossary={this.props.glossary}
               />
      case 'bibliotheca':
        return <Bibliotheca 
                  bibliography={this.props.bibliography} 
                  authorsIndex={this.props.authorsIndex}
                />
      case 'dimensio':
        return <Dimensio 
                storyTitle={this.props.story.metadata.title} 
                pdfUrl={this.props.pdfUrl} 
                epubUrl={this.props.epubUrl} 
                jsonUrl={this.props.jsonUrl} 
               />
      case '':
        return <Home />
      default:
        return <Section 
                  id={this.state.viewId} 
                  citations={this.props.rawCitations}
                  query={this.state.query}
                />
    }
  }

  render() {
    const {
      story,
      contextualizers,
      locale,
      // citations
    } = this.props;
    const {
      renderActiveView
    } = this;
    return renderActiveView();
  }
}

PreviewContainer.childContextTypes = {
  activeViewId: PropTypes.string,
  navigateTo: PropTypes.func,
  LinkComponent: PropTypes.func,
  story: PropTypes.object,
  contextualizers: PropTypes.object,
  rawCitations: PropTypes.object,
  locale: PropTypes.object,
}