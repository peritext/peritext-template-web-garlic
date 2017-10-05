/**
 * This module exports a stateless reusable block asset wrapper component
 * It handles the connection to context's data and builds proper data to render the asset
 * ============
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StructuredCOinS} from 'peritext-rendering-utils';



class BlockAssetWrapper extends Component {
  constructor(props) {
    super(props);
    
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(
      this.props.data !== nextProps.data ||
      this.context.story !== nextContext.story ||
      this.context.fixedPresentationId !== nextContext.fixedPresentationId ||
      this.context.dimensions.width !== nextContext.dimensions.width ||
      this.context.dimensions.height !== nextContext.dimensions.height ||
      this.context.activeContextualizationId !== nextContext.activeContextualizationId
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      props: {
        data,
      },
      context: {
        story,
        dimensions = {},
        fixedPresentationId,
        onPresentationExit,
        inNote,
        contextualizers,
        activeContextualizationId,
        onAssetContextRequest,
        bindBlockContextualization,
        onExpandableBlockClick,
      }
    } = this;

    const assetId = data.asset.id;
    const contextualization = story && story.contextualizations && story.contextualizations[assetId];
    if (!contextualization) {
      return null;
    }
    const contextualizer = story.contextualizers[contextualization.contextualizerId];
    const resource = story.resources[contextualization.resourceId];
    const contextualizerModule = contextualizers[contextualizer.type];
    const Component = contextualizerModule && contextualizerModule.BlockDynamic;
    const expandable = contextualizerModule && 
                        contextualizerModule.metadata && 
                        contextualizerModule.metadata.model && 
                        contextualizerModule.metadata.model.block && 
                        contextualizerModule.metadata.model.block.expandable;
    const onExit = (direction) => {
      if (onPresentationExit && typeof onPresentationExit === 'function') {
        onPresentationExit(direction);
      }
    }
    const onExitTop = () => {
      onPresentationExit('top');
    }
    const onExitBottom = () => {
      onPresentationExit('bottom');
    }
    const fixed = fixedPresentationId === assetId;
    const active = assetId === activeContextualizationId;
    const onClick = () => {
      if (typeof onAssetContextRequest === 'function') {
        onAssetContextRequest(assetId);
      }
    }

    const handleWheel = e => {
      e.stopPropagation();
    }

    const bindRef = component => {
      if (typeof bindBlockContextualization === 'function') {
        bindBlockContextualization(assetId, component);
      }
    }

    const onContainerClick = e => {
      if (!fixed && 
        expandable &&
        typeof onExpandableBlockClick === 'function'
        ) {
        e.stopPropagation();
        e.preventDefault();
        onExpandableBlockClick(assetId);
      }
    }

    if (contextualization && Component) {
      const hideInWebMode = (contextualizer.visibility !== undefined ? !contextualizer.visibility.web : false);
      return hideInWebMode ? null : (
        <figure
          ref={bindRef}
          onClick={onContainerClick}
          onWheel={handleWheel}
          className={'BlockAssetWrapper ' + contextualizer.type + (active ? ' active' : '') + (fixed ? ' fixed' : '') + (expandable ? ' expandable': '')}
          style={{
            minHeight: (contextualizer.type === 'data-presentation' || contextualizer.type === 'dicto' ) ? dimensions.height : '',
            height: (contextualizer.type === 'data-presentation' || contextualizer.type === 'dicto' ) ? dimensions.height : '',
            position: fixed ? 'fixed' : 'relative',
            left: fixed ? dimensions && dimensions.position && dimensions.position.left : undefined,
            top: fixed ? dimensions && dimensions.position && dimensions.position.top : undefined,
            width: fixed ? dimensions && dimensions.width : undefined,
            // height: fixed ? dimensions.height : undefined,
            border: fixed ? '5px solid #f32e36' : undefined,
          }}
          id={assetId}
          >
          <StructuredCOinS resource={resource} />
          <Component
            resource={resource}
            contextualizer={contextualizer}
            contextualization={contextualization}

            onExit={onExit}

            fixed={fixed}
            allowInteractions={inNote || fixed}
          />
          {
            fixed &&
            <div className="quick-exit-container">
              <button className="exit-top" onClick={onExitTop}>▲</button>
              <button className="exit-bottom" onClick={onExitBottom}>▼</button>
            </div>
          }
          <figcaption>
            {<h4>
              {contextualization.title || resource.metadata.title}
            </h4>}
            {<p>
              {contextualization.legend || resource.metadata.description}
            </p>}
            {resource.metadata.source && <p>
              Source: <i>{resource.metadata.source}</i>
            </p>}
            <p>
              <button style={{cursor: 'pointer'}} onClick={onClick}>🔀</button>
            </p>
          </figcaption>
        </figure>
      );
    }
    else {
      return null;
    }

  }
}
/**
 * Component's properties types
 */
BlockAssetWrapper.propTypes = {
  /**
   * Corresponds to the data initially embedded in a draft-js entity
   */
  data: PropTypes.shape({
    asset: PropTypes.shape({
      id: PropTypes.string
    })
  })
};
/**
 * Component's context used properties
 */
BlockAssetWrapper.contextTypes = {
  /**
   * The active story data
   */
  story: PropTypes.object,
  /**
   * Dimensions of the wrapping element
   */
  dimensions: PropTypes.object,
  /**
   * Id of the presentation being displayed full screen if any
   */
  fixedPresentationId: PropTypes.string,
  /**
   * Whether the block asset is displayed in a note (and not in main content)
   */
  inNote: PropTypes.bool,

  contextualizers: PropTypes.object,
  /**
   * Triggered when a full-screen asset is exited
   */
  onPresentationExit: PropTypes.func,

  activeContextualizationId: PropTypes.string,

  onAssetContextRequest: PropTypes.func,

  bindBlockContextualization: PropTypes.func,

  onExpandableBlockClick: PropTypes.func,
};

export default BlockAssetWrapper;
