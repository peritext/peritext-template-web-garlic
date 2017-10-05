import React from 'react';
import PropTypes from 'prop-types';

const PreviewLink = ({
  to,
  as,
  query = {},
  title,
  onButtonClick,
}, {
  navigateTo,
  activeViewId
}) => (
  <button 
    onClick={e => {
      if (typeof onButtonClick === 'function') {
        onButtonClick();
      }
      navigateTo(query.id || to, query)
    }} 
    className={"link " + (activeViewId === to ? 'active' : '')}>
      {title}
    </button>
)

PreviewLink.contextTypes = {
  navigateTo: PropTypes.func,
  activeViewId: PropTypes.string
}

export default PreviewLink;