import React from 'react';
import ContextMention from './ContextMention';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {StructuredCOinS} from 'peritext-rendering-utils';

const getEntryName = entry => {
  return (entry.item && entry.item.title) 
        || (entry.resource && entry.resource.data.name) 
        || (entry.given && entry.family + ' ' + entry.given)
        || entry.id;
};

export default ({
  title,
  entries = [],
  toggleOpenedItemId,
  openedItemId,
  entryNameGetter,
  className = ''
}) => (
<div className={"mentions-container " + className}>
  <h2>{title}</h2>
  <ul className="index-list">
    {
      entries
      .map((entry, index) => {
        const entryName = entryNameGetter ? entryNameGetter(entry) : getEntryName(entry);
        const expanded = openedItemId === entry.id;
        const toggleItemExpansion = () => toggleOpenedItemId(entry.id);

        return (
          <li 
            key={index} 
            id={entryName}
            className={'mentions-list-container ' + (expanded ? 'expanded' : '')}
          >
            {
              entry.item && 
              <StructuredCOinS cslRecord={entry.item}/>
            }
            <h3  
              className="index-list-title"
              onClick={toggleItemExpansion}
            >{entryName} <button className={"collapse-btn " + (expanded ? ' active' : '')}>{expanded ? '- Cacher les mentions' : '+ Montrer les mentions'}</button></h3>
              <ReactCSSTransitionGroup
                transitionName="mentions-animation"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
              {expanded && <ul className="mentions-list">
                {
                  entry.mentions
                  .filter(mention => 
                      mention.contextContent !== undefined &&
                      mention.contextContent.targetContents !== undefined
                    )
                  .map((mention, count) => {
                    const {
                        contextContent: {
                          targetContents,
                          contents,
                          sectionTitle,
                          sectionId,
                        },
                        id,
                    } = mention;
                    return (
                      <li key={count} id={id}>
                        <ContextMention
                          targetContents={targetContents}
                          contents={contents}
                          sectionTitle={sectionTitle}
                          sectionId={sectionId}
                          contextualizationId={id}
                        />
                      </li>
                    )
                  })
                }
              </ul>}
            </ReactCSSTransitionGroup>
            </li>
        );
      })
     }
  </ul>
</div>
)