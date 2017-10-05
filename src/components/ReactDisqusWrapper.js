import React, {Component} from 'react';
import PropTypes from 'prop-types';

const isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
const inBrowser = isBrowser();
let ReactDisqusComments;
if (inBrowser) {
  ReactDisqusComments = require('react-disqus').default;  
} else {
  ReactDisqusComments = <div />;
}

/**
 * ReactDisqusWrapper class for building disqus wrapper react component instances
 */
class ReactDisqusWrapper extends Component {

  /**
   * Defines whether component should be updated
   * @param {object} nextProps - the props to come
   * @return {boolean} shouldUpdate - whether to update
   */
  shouldComponentUpdate(nextProps) {
    return (
      this.props.identifier !== nextProps.identifier ||
      this.props.shortname !== nextProps.shortname ||
      this.props.title !== nextProps.title ||
      this.props.url !== nextProps.url
    );
  }

  /**
   * Renders the component
   * @return {ReactElement} component - the component
   */
  render() {
    const {
      shortname,
      identifier,
      title,
      url,
      onNewComment
    } = this.props;

    const handleNewComment = comment => {
      // we add a little security in case no onNewComment callback is provided
      if (onNewComment && typeof onNewComment === 'function') {
        onNewComment(comment);
      }
    };

    return (
      <ReactDisqusComments
        shortname={shortname}
        identifier={identifier}
        title={title}
        url={url}
        onNewComment={handleNewComment} 
      />
    );
  }
}

/**
 * Component's properties types
 */
ReactDisqusWrapper.propTypes = {
  /**
   * These properties are the one needed by react-disqus-thread
   * see : https://github.com/mzabriskie/react-disqus-thread
   */
  shortname: PropTypes.string,
  identifier: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  onNewComment: PropTypes.func
};

export default ReactDisqusWrapper;