import React from 'react';
import PropTypes from 'prop-types';

const SectionLink = ({
  id,
  title,
  query = {},
  onButtonClick,
}, {
  LinkComponent
}) => (
  <LinkComponent
    to="section"
    as="section"
    onButtonClick={onButtonClick}
    query={{
      ...query,
      id
    }}
    title={title}
  />
);

export default SectionLink;

SectionLink.contextTypes = {
  LinkComponent: PropTypes.func,
}