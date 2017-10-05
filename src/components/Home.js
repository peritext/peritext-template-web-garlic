import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import SectionLink from './SectionLink';
import {StructuredCOinS} from 'peritext-rendering-utils';

class Contents extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {
      story,
      LinkComponent,
    } = this.context;
    const firstSection = story.sections[story.sectionsOrder[0]];
    const firstSectionTitle = firstSection.metadata.title;
    const firstSectionId = firstSection.id;
    return (
        <section className="main-contents-container">
          <StructuredCOinS resource={story} />
          <div className={"home-header " + (story.metadata.covers && story.metadata.covers.web ? 'hidden': 'visible')}>
            <h1>{story.metadata.title}</h1>
            {story.metadata.subtitle && <h2 className="subtitle">{story.metadata.subtitle}</h2>}
            <h2 className="authors">
              {
                story.metadata.authors &&
                story.metadata.authors.length > 0 &&
                story.metadata.authors
                .map((author, index) => <span key={index}>{author.given} {author.family}</span>)
                .reduce((prev, curr) => [prev, ', ', curr])
              }
            </h2>
          </div>
          <div className="contents-guttered">
            {story.metadata.covers && story.metadata.covers.web &&
              <div className="cover-image">
                <SectionLink 
                  id={firstSectionId} 
                  title={
                    <img src={story.metadata.covers.web} />
                  }
                />
              </div>
              
            }
            {story.metadata.description && <blockquote className="story-description">
              {story.metadata.description}
            </blockquote>}
            <div>
              <SectionLink 
                id={firstSectionId} 
                title={'Commencer la lecture - ' + firstSectionTitle}
              />
            </div>
          </div>
        </section>
    )
  }
}

Contents.contextTypes = {
  story: PropTypes.object,
  LinkComponent: PropTypes.func,
}

export default () => (
  <Layout activeId="">
    <Contents />
  </Layout>
)