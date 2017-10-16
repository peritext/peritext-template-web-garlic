import React from 'react';
import PropTypes from 'prop-types';

import SectionLink from './SectionLink';

const Nav = ({
  indexOpen = true,
  toggleIndex,
  activeId,
  inTop = false,
}, {
  story,
  LinkComponent,
  dimensions,
  locale,
}) => {
  const hasGlossary = Object.keys(story.contextualizers)
    .find(id => story.contextualizers[id].type === 'glossary') !== undefined;
  const hasResources = Object.keys(story.resources).length > 0;
  return (
    <nav
      className={"nav" + (indexOpen ? ' open': '') + (inTop ? ' in-top': '')}
      style={{
        position: 'fixed',
        left: (dimensions && dimensions.position) ? dimensions.position.left : 0,
        top: (dimensions && dimensions.position) ? dimensions.position.top: 0,
        height: (dimensions && dimensions.height) ? dimensions.height : '100%',
        width: (dimensions && dimensions.width) ? dimensions.width * .2 : '20%',
      }}>
      {toggleIndex && 
        <div 
          className={'header ' + (inTop || !toggleIndex ? 'hidden': 'visible')}
        >
         <button
            className={'index-toggle ' + (indexOpen ? 'active' : '')}
            onClick={toggleIndex}>
            <span id="burger-menu" className={indexOpen ? 'open' : ''}>
              <span />
              <span />
              <span />
              <span />
            </span>
          </button>
      </div>}
      <div className="body">
        <h2  className={'nav-title' + (activeId === 'index' ? ' active': ' ')}>
          <LinkComponent title={story.metadata.title || ((locale && locale.untitledStory) || 'Récit sans titre')} to="" />
        </h2>
        <ul
          className="table-of-contents">
        {
          story.sectionsOrder.map(id => {
            const section = story.sections[id];
            const sectionLevel = section.metadata.level;
            const sectionTitle = section.metadata.title;
            return (
              <li 
                className={
                  (activeId === id ? 'active ': ' ') +
                  'section-link-level-' + sectionLevel
                } 
                key={id}>
                <SectionLink
                   id={id}
                   title={sectionTitle || ((locale && locale.untitledSection) || 'Section sans titre')}
                />
              </li>
            )
          })
        }
        </ul>
      </div>
      <div className="footer">
        <ul>
          {hasGlossary && <li className={activeId === 'lexicon' ? 'active': ''}>
            <LinkComponent title={(locale && locale.glossary) || 'Glossaire'} to="lexicon" />
          </li>}
          {hasResources && <li className={activeId === 'bibliotheca' ? 'active': ''}>
            <LinkComponent title={(locale && locale.references) || 'Références'} to="bibliotheca" />
          </li>}
          <li className={activeId === 'dimensio' ? 'active': ''}>
            <LinkComponent title={(locale && locale.otherFormats) || 'Autres formats'} to="dimensio" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

Nav.contextTypes = {
  story: PropTypes.object,
  LinkComponent: PropTypes.func,
  dimensions: PropTypes.object,
  locale: PropTypes.object,
}

export default Nav;