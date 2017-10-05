import React from 'react';
import PropTypes from 'prop-types';

import {makeBibliography} from 'react-citeproc';

import {buildContextContent} from 'peritext-rendering-utils';

import ContextMention from '../components/ContextMention';

const makeAssetTitle = (resource, story, citations) => {
  const type = resource.metadata.type;
  switch(type) {
    case 'glossary':
      return resource.data.name ? resource.data.name : resource.data.firstName + ' ' + resource.data.lastName;
    case 'bib':
      const citation = makeBibliography(
        citations.citationItems,
        story.settings.citationStyle.data,
        story.settings.citationLocale.data,
        {
          select: [{
            field: 'id',
            value: resource.data[0].id
          }]
        }
      )[1];
      return <div dangerouslySetInnerHTML={{__html: citation}} />
    default:
      console.log('cannot make asset title for resource type ', type);
      return resource.metadata.title;
  }
}

const RelatedContexts = ({
  story,
  assetId,
  onDismiss,
}, {
  rawCitations,
  contextualizers,
}) => {
  const contextualization = story.contextualizations[assetId];

  const resourceId = contextualization.resourceId;
  const related = Object.keys(story.contextualizations)
    .filter(contextualizationId => 
      contextualizationId !== assetId &&
      story.contextualizations[contextualizationId].resourceId === resourceId
    )
    .map(contextualizationId => ({
      ...story.contextualizations[contextualizationId],
      ...buildContextContent(story, contextualizationId)
    }));
  const resource = story.resources[contextualization.resourceId]
  const assetTitle = makeAssetTitle(resource, story, rawCitations);
  const Citation = resource.metadata.type !== 'bib' && resource.metadata.type !== 'glossary' && contextualizers.bib && contextualizers.bib.BlockDynamic;
  return (
    <div className="RelatedContexts">
      <div className="header">
        <h2>{assetTitle} <button className="close-context-btn" onClick={onDismiss}>X</button> </h2>
        {Citation &&
          <Citation resource={resource} />
        }
      </div>
      {related.length ? 
        <h3>
          Cette ressource est aussi contextualisée dans :
        </h3> : null}
      {related.length ? <ul className="body">
        {
          related
          .filter(contextualization => contextualization.targetContents !== undefined)
          .map(contextualization => (
            <li key={contextualization.id}>
              <ContextMention
                onButtonClick={onDismiss}
                targetContents={contextualization.targetContents}
                contents={contextualization.contents}
                sectionTitle={contextualization.sectionTitle}
                sectionId={contextualization.sectionId}
                contextualizationId={contextualization.id}
              />
            </li>
          ))
        }
      </ul> : <div className="body">Pas d'autres contextualizations</div>}
    </div>
  );
}

RelatedContexts.contextTypes = {
  rawCitations: PropTypes.object,
  contextualizers: PropTypes.object,
}

export default RelatedContexts;