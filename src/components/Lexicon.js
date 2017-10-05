import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import MentionsContainer from './MentionsContainer';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItemId: undefined
    }
  }

  toggleOpenedItemId = openedItemId => {
    const to = this.state.openedItemId === openedItemId ? undefined: openedItemId
    if (to) {
      setTimeout(() => {
        this.context.scrollToElementId(openedItemId)
      }, 500)
    }
    this.setState({
      openedItemId: to
    });
  }

  render = () => {
    const {
      toggleOpenedItemId,
      state: {
        openedItemId
      },
      props: {
        glossary,
      }
    } = this;

    const formattedGlossary = glossary.map(ref => ({
      ...ref,
      id: ref.resource.metadata.id
    }));
    return (
      <Layout activeId="lexicon">
        <section className="main-contents-container">
          <div className="contents-guttered">
            {glossary && <MentionsContainer
              title={'Glossaire'}
              entries={formattedGlossary}
              toggleOpenedItemId={toggleOpenedItemId}
              openedItemId={openedItemId}
            />}
            
          </div>
        </section>
      </Layout>
    )
  }
}

Contents.contextTypes = {
  scrollToElementId: PropTypes.func,
}

export default ({
  glossary,
  authorsIndex,
}) => (
  <Layout activeId="lexicon">
    <Contents 
      glossary={glossary} 
      authorsIndex={authorsIndex} 
    />
  </Layout>
)
