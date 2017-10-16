import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StructuredCOinS} from 'peritext-rendering-utils';

import Layout from './Layout';
import RelatedContexts from './RelatedContexts';
import NotesContainer from './NotesContainer';
import SectionLink from './SectionLink';
import Renderer from './Renderer';


const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();
let Comments;
if (inBrowser) {
  Comments = require('./ReactDisqusWrapper').default;  
}

class Contents extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      gui: {
        openedAssetId: undefined,
      },
      fixedPresentationId: undefined,
      fixedPresentationHeight: undefined,
      notes: this.updateNotes(props, context),
    };

    this.blockContextualizations = {};

    this.noteContentPointers = {};

    this.noteContentBlocks = {};

    this.bindNoteContentPointer = this.bindNoteContentPointer.bind(this);
    this.bindNoteContentBlock = this.bindNoteContentBlock.bind(this);
  }

  bindNoteContentPointer(id, component) {
    this.noteContentPointers[id] = component;
  }


  bindNoteContentBlock(id, component) {
    this.noteContentBlocks[id] = component;
  }

  componentDidMount() {
    if (this.props.query.contextualizationId) {
      this.context.scrollToElementId(this.props.query.contextualizationId);
    } else if (this.props.query.blockId) {
      this.context.scrollToElementId(this.props.query.blockId);
    }
    if (this.props.query) {
      setTimeout(() => {
        if (this.props.query.contextualizationId) {
          this.context.scrollToElementId(this.props.query.contextualizationId);
        } else if (this.props.query.blockId) {
          this.context.scrollToElementId(this.props.query.blockId);
        }
      } , 3000);
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.context && nextContext && this.context.scrollTopAbs !== nextContext.scrollTopAbs) {
      this.onScrollUpdate(nextContext.scrollTopAbs);
    }
    // on section change
    if (this.props.sectionId !== nextProps.sectionId) {
      if (this.props.query.contextualizationId === nextProps.query.contextualizationId) {
        this.context.scrollToTop(0);
      }
      this.setState({
        notes: this.updateNotes(nextProps, nextContext),
        fixedPresentationHeight: undefined,
        fixedPresentationId: undefined,
        gui: {
          openedAssetId: undefined,
        },
      });
    }
    if (this.props.query !== nextProps.query) {
      if (this.props.query.contextualizationId !== nextProps.query.contextualizationId) {
        setTimeout(() =>
        this.context.scrollToElementId(this.props.query.contextualizationId)
        , 2000);
      }
    }
  }

  getChildContext = () => ({
    onPresentationExit: this.onPresentationExit,
    activeContextualizationId: this.state.gui.openedAssetId,
    onAssetContextRequest: this.onAssetContextRequest,
    fixedPresentationId: this.state.fixedPresentationId,
    fixedPresentationHeight: this.state.fixedPresentationHeight,
    notes: this.context.story.sections[this.props.sectionId] && this.context.story.sections[this.props.sectionId].notes,
    onNoteContentPointerClick: this.onNoteContentPointerClick,
    onNoteContentClick: this.onNoteContentClick,
    bindBlockContextualization: this.bindBlockContextualization,
    bindNoteContentPointer: this.bindNoteContentPointer,
    bindNoteContentBlock: this.bindNoteContentBlock,
    onExpandableBlockClick: this.onExpandableBlockClick,
  })

  updateNotes = (props, context) => {
    const section = context.story.sections[props.sectionId];
    if (!section) {
      return [];
    }
    const notes = Object.keys(section.notes)
      .map(id => section.notes[id])
      .map(note => ({
        ...note,
        finalOrder: note.order
      }))
      .sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        } else return -1;
      });
    return notes;
  }

  onScrollUpdate = (scrollTopAbs) => {
    const {contextualizers} = this.context;
    const expandableBlocks = Object.keys(this.context.story.contextualizations)
      .map(id => this.context.story.contextualizations[id])
      .filter(contextualization => {
        const contextualizer = this.context.story.contextualizers[contextualization.contextualizerId];
        const contextualizerModel = contextualizers
          && contextualizers[contextualizer.type]
          && contextualizers[contextualizer.type].metadata
          && contextualizers[contextualizer.type].metadata.model
          && contextualizers[contextualizer.type].metadata.model.block
        const expandable = contextualizer.insertionType === 'block'
          && contextualizerModel && contextualizerModel.expandable;
        return expandable;
        // return (
        //   contextualizer.insertionType === 'block' &&
        //   contextualizer.type === 'data-presentation' ||
        //   contextualizer.type === 'dicto'
        // );
      })
      .map(contextualization => ({
        contextualization,
        component: this.blockContextualizations[contextualization.id]
      }));
    if (!this.state.fixedPresentationId) {
      expandableBlocks.some(block => {
        const component = block.component;
        if (!component || component.offsetHeight == undefined) {
          return false;
        }
        const height = component.offsetHeight;
        const top = component.offsetTop;
        if (scrollTopAbs >= top && scrollTopAbs <= top + height * .1 ) {
          this.setState({
            fixedPresentationId: block.contextualization.id,
            fixedPresentationHeight: height
          });
          return true;
        }
      })
    }
  }

  closeAsideAsset = () => {
    if (this.state.gui.openedAssetId) {
      this.setState({
        gui: {
          ...this.state.gui,
          openedAssetId: undefined
        }
      });
    }
  }

  onAssetContextRequest = (assetId) => {
    if (assetId !== this.state.gui.openedAssetId) {
      this.setState({
        gui: {
          ...this.state.gui,
          openedAssetId: assetId,
        }
      });
    } else {
      this.setState({
        gui: {
          ...this.state.gui,
          openedAssetId: undefined
        }
      });
    }
  }

  onNoteContentPointerClick = (noteId) => {
    this.context.scrollToElementId(noteId);
  }

  onNoteContentClick = noteId => {
    this.context.scrollToElementId('note-content-pointer-' + noteId);
  }

  onExpandableBlockClick = contextualizationId => {
    this.context.scrollToElementId(contextualizationId, false);
  }

  /**
   * Handles when a full-screen presentation is exited
   * @param {string} - the direction of the exit (top or bottom)
   */
  onPresentationExit = (direction) => {
    this.setState({
      fixedPresentationId: undefined,
      fixedPresentationHeight: undefined
    })
    const top = this.context.scrollTopAbs;
    // user is scrolling in direction of the top of the screen
    if (direction === 'top') {
      const h = this.state.fixedPresentationHeight || this.context.dimensions.height;
      this.context.scrollToTop(top - h * 0.7);
    }
    // user is scrolling in direction of the bottom of the screen
    else {
      const h = this.state.fixedPresentationHeight || this.context.dimensions.height;
      this.context.scrollToTop(top + h * 0.6);
    }
  }

  bindBlockContextualization = (assetId, element) => {
    this.blockContextualizations[assetId] = element;
  }

  render = () => {
    const {
      onScrollUpdate,
      closeAsideAsset,
      state: {
        gui: {
          openedAssetId,
        },
        notes,
      },
      props: {
        size,
        url,
        sectionId,
        citations,
      },
      context: {
        story,
        dimensions,
        locale
      }
    } = this;

    if (!story) {
      return null;
    }
    
    const dynamicNotesPosition = story.settings.options.dynamicNotesPosition;
    const section = story.sections[sectionId];
    if (!section) {
      return null;
    }
    const options = story.settings && story.settings.options || {};
    const sectionOrder = story.sectionsOrder.indexOf(sectionId);
    const previousSectionId = sectionOrder > 0 && story.sectionsOrder[sectionOrder - 1];
    const nextSectionId = sectionOrder < story.sectionsOrder.length - 1 && story.sectionsOrder[sectionOrder + 1];
    const previousSection = story.sections[previousSectionId];
    const nextSection = story.sections[nextSectionId];
    const storyMetadata = story.metadata;
    const {
      title: storyTitle, 
      authors: storyAuthors
    } = storyMetadata;
    const sectionMetadata = section.metadata;
    const {
      title: sectionTitle, 
      authors: sectionAuthors
    } = sectionMetadata;
    const contents = section.contents;
    return (
      <section className="main-contents-container section-player">
          <StructuredCOinS resource={section} />
          <h1 className="section-title">
            {sectionTitle || ((locale && locale.untitledSection) || 'Section sans titre')}
          </h1>
          {section.metadata.subtitle && <h2 className="subtitle">{section.metadata.subtitle}</h2>}
          {sectionAuthors.length > 0 && 
            <h2 className="authors">
              {
                sectionAuthors &&
                sectionAuthors.length > 0 &&
                sectionAuthors
                .map((author, index) => <span key={index}>{author.given} {author.family}</span>)
                .reduce((prev, curr) => [prev, ', ', curr])
              }
            </h2>
          }
          <Renderer raw={contents} />
          {inBrowser && options.disqus && 
            <Comments
              shortname={'peritext'}
              identifier={section.metadata.id}
              title={sectionTitle || ((locale && locale.untitledSection) || 'Section sans titre')}
              url={window.location.href.replace(/https?:\/\//, '')}
            />
          }
          <footer>
            <ul>
              {previousSection && 
                <li className="prev">  
                  <SectionLink
                    id={previousSection.id}
                    title={'← ' + previousSection.metadata.title}
                  />
                </li>
              }
              <li>
                <i>{storyTitle} - {sectionTitle}</i>
              </li>
              {nextSection && 
                <li className="next">  
                  <SectionLink
                    id={nextSection.id}
                    title={nextSection.metadata.title + ' →'}
                  />
                </li>
              }
            </ul>
          </footer>
          {notes.length > 0 ?
            <NotesContainer pointers={this.noteContentPointers} notes={notes} dynamicNotesPosition={dynamicNotesPosition} /> 
           : null}
        <aside 
          className={
            'section-aside ' + (openedAssetId ? 'active' : '')
          }
          style={{
            left: (dimensions && dimensions.position) ? dimensions.position.right - dimensions.width * .2 * .8 : '84%',
            top: (dimensions && dimensions.position && dimensions.position.top) ? dimensions.position.top : 0,
            height: (dimensions && dimensions.height) ? dimensions.height : '100%',
            width: (dimensions && dimensions.width) ? dimensions.width * .2 * .8 : '16%',
          }}
        >
          {
            openedAssetId && 
            <RelatedContexts 
              story={story} 
              assetId={openedAssetId}
              onDismiss={closeAsideAsset} 
              citations={citations}
            />
          }
        </aside>
      </section>
    )
  }
}

Contents.childContextTypes = {
  onNoteContentPointerClick: PropTypes.func,
  onNoteContentClick: PropTypes.func,
  onPresentationExit: PropTypes.func,
  onAssetContextRequest: PropTypes.func,
  fixedPresentationId: PropTypes.string,
  fixedPresentationHeight: PropTypes.number,
  activeContextualizationId: PropTypes.string,
  bindBlockContextualization: PropTypes.func,
  bindNoteContentPointer: PropTypes.func,
  bindNoteContentBlock: PropTypes.func,
  notes: PropTypes.object,
  onExpandableBlockClick: PropTypes.func
}

Contents.contextTypes = {
  dimensions: PropTypes.object,
  story: PropTypes.object,
  scrollTopAbs: PropTypes.number,
  scrollToTop: PropTypes.func,
  scrollToElementId: PropTypes.func,
  contextualizers: PropTypes.object,
  locale: PropTypes.object,
}


export default ({id, citations, query}) => (
  <Layout activeId={id}>
    <Contents query={query} sectionId={id} citations={citations} />
  </Layout>
)