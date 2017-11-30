import React, {Component} from 'react';
import PropTypes from 'prop-types';
import sizeMe from 'react-sizeme';
import {debounce} from 'lodash';
import {Scrollbars} from 'react-custom-scrollbars';
import {SpringSystem, MathUtil} from 'rebound';
// import {buildCitations} from 'peritext-rendering-utils';

import Nav from './Nav';
import {ReferencesManager} from 'react-citeproc';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();

if (!inBrowser) {
  sizeMe.noPlaceholders = true;
}

const getOffsetToParent = (element, container) => {
  let offset = 0;
  let el = element;
  do {
    offset += el.offsetTop;
    el = el.offsetParent;
  } while (el !== undefined && el !== container);

  return offset;
}

class Layout extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      gui: {
        indexOpen: false,
        inTop: true,
      },
    }

    this.onScrollUpdate = this.onScrollUpdate.bind(this);
    // this.onScrollUpdate = debounce(this.onScrollUpdate.bind(this), 100, 0, {leading: true});
  }

  getChildContext = () => {
    const dimensions = {
      ...this.props.size,
      width: this.props.size.width || (inBrowser && window.innerWidth),
      height: this.props.size.height || (inBrowser && window.innerHeight),
    };
    return {
      dimensions,
      scrollToElementId: this.scrollToElementId,
      scrollToTop: this.scrollTo,
      scrollTop: this.state.gui.scrollTop,
      scrollTopAbs: this.state.gui.scrollTopAbs,
    }
  }

  /**
   * Executes code on instance after the component is mounted
   */
  componentDidMount = () => {

    // we use a spring system to handle automatic scrolls
    // (e.g. note pointer clicked or click in the table of contents)
    this.springSystem = new SpringSystem();
    this.spring = this.springSystem.createSpring();
    this.spring.addListener({onSpringUpdate: this.handleSpringUpdate});
  }

  componentWillUnmount() {
    // this.globalScrollbar = null;
  }

  /**
   * Handles the scrolling process using the spring system
   * @param {object} spring - the spring system instance
   */
  handleSpringUpdate = (spring) => {
    const val = spring.getCurrentValue();
    if (val !== undefined && this.globalScrollbar) {
      this.globalScrollbar.scrollTop(val);
    }
  }

  /**
   * Handle scrolling to a specific title in the page
   * @param {string} id - the id of the item to scroll to
   */
  scrollToElementId = (id, center = true) => {
    if (inBrowser && this.globalScrollbar) {
      const container = this.globalScrollbar.container;
      const element = document.getElementById(id);
      if (element) {
        let offset = getOffsetToParent(element, container);
        offset = center ? offset - this.props.size.height / 2 : offset;
        this.scrollTo(offset);
      }
    }
  }

  /**
   * Programmatically modifies the scroll state of the component
   * so that it transitions to a specific point in the page
   * @param {number} top - the position to scroll to
   */
  scrollTo = (top) => {
    const scrollbars = this.globalScrollbar;
    if (!scrollbars) {
      setTimeout(() => {
        if (this.globalScrollbar) {
          this.scrollTo(top);
        }
      })
      return;
    }
    const scrollTop = scrollbars.getScrollTop();
    const scrollHeight = scrollbars.getScrollHeight();
    const val = MathUtil.mapValueInRange(top, 0, scrollHeight, 0, scrollHeight);
    this.spring.setCurrentValue(scrollTop).setAtRest();
    this.spring.setEndValue(val);
  }

  onScrollUpdate = (scrollPosition) => {
    const scrollTop = scrollPosition.top;
    const scrollTopAbs = scrollPosition.scrollTop;
    let stateChanges = {};
    if (scrollTop !== this.state.gui.scrollTop) {
      stateChanges = {
        ...stateChanges,
        gui: {
          ...this.state.gui,
          inTop: scrollTop === 0 ? true : false,
          scrollTop,
          scrollTopAbs
        }
      }
    }
    if (Object.keys(stateChanges).length) {
      this.setState(stateChanges);
    }
  }

  toggleIndex = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      gui: {
        ...this.state.gui,
        indexOpen: !this.state.gui.indexOpen,
      }
    });
  }

  render = () => {
    const {
      children,
      activeId
    } = this.props;
    const {
      toggleIndex,
      onScrollUpdate,
      state,
      context,
    } = this;
    const {
      gui: {
        indexOpen,
        inTop,
      },
      // rawCitations = {},
    } = state;
    const {
      story,
      rawCitations
    } = context;

    const citationStyle = story.settings.citationStyle.data;
    const citationLocale = story.settings.citationLocale.data;
    
    const bindGlobalScrollbarRef = scrollbar => {
      this.globalScrollbar = scrollbar;
    };

    return (
      <ReferencesManager
                style={citationStyle}
                locale={citationLocale}
                items={rawCitations.citationItems}
                citations={rawCitations.citationData}
                componentClass="references-manager">
        {inBrowser ? 
          <section 
            className="garlic-layout"
          >
            <Scrollbars
              ref={bindGlobalScrollbarRef}
              autoHide
              onUpdate={onScrollUpdate}
              universal={true}>
            <Nav
              indexOpen={indexOpen}
              toggleIndex={toggleIndex}
              inTop={inTop}
              activeId={activeId}
            />
            <section className="contents-wrapper">
              {children}
            </section>
            </Scrollbars>
          </section>
            : // config for server-side rendering (no scrollbars)
            <section 
              className="garlic-layout"
            >
              <Nav
                indexOpen={indexOpen}
                toggleIndex={toggleIndex}
                inTop={inTop}
                activeId={activeId}
              />
              <section className="contents-wrapper">
                {children}
              </section>
          </section>
        }
        <style>
          {story.settings.css && story.settings.css.web && story.settings.css.web.css ? story.settings.css.web.css : ''}
        </style>
      </ReferencesManager>
    );
  }
}

Layout.contextTypes = {
  story: PropTypes.object,
  rawCitations: PropTypes.object
}

Layout.childContextTypes = {
  dimensions: PropTypes.object,
  scrollToElementId: PropTypes.func,
  scrollToTop: PropTypes.func,
  scrollTop: PropTypes.number,
  scrollTopAbs: PropTypes.number,
  rawCitations: PropTypes.object,
}


export default sizeMe({
  monitorHeight: true, 
  monitorWidth: true ,
  monitorPosition: true,
})(Layout)