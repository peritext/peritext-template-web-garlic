import React from 'react';
import Renderer from './Renderer';
import SectionLink from './SectionLink';

export default ({
  targetContents,
  contents,
  sectionTitle,
  sectionId,
  contextualizationId,
  onButtonClick,
}) => (
  <div className="ContextMention">
    
    <div className="header">
      <SectionLink
        id={sectionId}
        onButtonClick={onButtonClick}
        title={`Contexte de la mention (${sectionTitle})`}
        query={{
          contextualizationId,
        }}
      />
    </div>
    <div className="exerpt">
      <SectionLink
        id={sectionId}
        onButtonClick={onButtonClick}
        title={
          <Renderer raw={contents} />
        }
        query={{
          contextualizationId,
        }}
      />
        
    </div>
    <div className="footer">
      <SectionLink
        id={sectionId}
        onButtonClick={onButtonClick}
        title={`Aller à la mention (${sectionTitle})`}
        query={{
          contextualizationId,
        }}
      />
    </div>
  </div>
);