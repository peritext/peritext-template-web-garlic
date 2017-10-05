import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import ContextMention from './ContextMention';
import MentionsContainer from './MentionsContainer';

class Contents extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      openedItemId: undefined,
    }
  }

  toggleOpenedItemId = (id) => {
    const to = id === this.state.openedItemId ? undefined : id;
    if (to) {
      setTimeout(() => {
        this.context.scrollToElementId(id)
      }, 500)
    }
    this.setState({
      openedItemId: to
    });
  }

  render = () => {
    const {
      story,
      scrollToElementId,
    } = this.context;
    const {
      toggleOpenedItemId
    } = this;
    const {
      openedItemId,
      // references,
    } = this.state;
    const {
      bibliography: references = [],
      authorsIndex,
    } = this.props;
    const firstSection = story.sections[story.sectionsOrder[0]];
    const firstSectionTitle = firstSection.metadata.title;
    const firstSectionId = firstSection.id;

    const authorNameGetter = entry => {
      return entry.given + ' ' + entry.family;
    };

    const bibNameGetter = entry => {
      return (
        <div 
          dangerouslySetInnerHTML={{
            __html: entry.title
          }}
        />
      )
    };

    const formattedReferences = references.map(ref => ({
      ...ref,
      id: ref.citationKey
    }));


    return (
        <section className="main-contents-container">
          <div className="contents-guttered">
              {references && <MentionsContainer
                title={'Références'}
                entries={
                  formattedReferences
                }
                toggleOpenedItemId={toggleOpenedItemId}
                openedItemId={openedItemId}
                entryNameGetter={bibNameGetter}
                className="end-references-container"
              />}
              {authorsIndex && <MentionsContainer
                title={'Index des auteurs'}
                entryNameGetter={authorNameGetter}
                entries={authorsIndex}
                toggleOpenedItemId={toggleOpenedItemId}
                openedItemId={openedItemId}
              />}
          </div>
        </section>
    )
  }
}

Contents.contextTypes = {
  story: PropTypes.object,
  scrollToElementId: PropTypes.func,
}

export default ({
  bibliography,
  ...props
}) => (
  <Layout activeId="bibliotheca">
    <Contents bibliography={bibliography} {...props} />
  </Layout>
)