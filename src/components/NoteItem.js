/* eslint react/forbid-prop-types:0 */
/**
 * This module exports a statefull reusable note player component
 * ============
 * @module quinoa-story-player/components/NoteItem
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Renderer from './Renderer';

/**
 * NoteItem class for building NoteItem react component instances
 */
class NoteItem extends Component {
  /**
   * constructor
   * @param {object} props - properties given to instance at instanciation
   */
  constructor(props) {
    super(props);
  }
  /**
   * Updates data in the context when the state or props change
   */
  getChildContext = () => {
    return {
      inNote: true,
    };
  }
  /**
   * Renders the component
   * @return {ReactElement} component - the component
   */
  render() {
    const {
      note,
      style = {},
    } = this.props;
    const {
      onNoteContentClick,
    } = this.context;

    const bindRef = component => {
      this.component = component;
    };
    const onClick = e => {
      e.stopPropagation();
      onNoteContentClick(note.id);
    };
    return (
      <li
        style={style}
        className="note-item"
        ref={bindRef}
        id={note.id}>
        <span onClick={onClick} className="note-block-pointer" id={'note-block-pointer-' + note.id}>
          {note.finalOrder}
        </span>
        <Renderer raw={note.editorState} />
      </li>
    );
  }
}

/**
 * Component's properties types
 */
NoteItem.propTypes = {
  note: PropTypes.object,
  style: PropTypes.object,
};

NoteItem.contextTypes = {
  onNoteContentClick: PropTypes.func,
}
/**
 * Component's context properties provided to children
 */
NoteItem.childContextTypes = {
  /**
   * Specifies that context is a note for all
   * assets displayed in this note
   */
  inNote: PropTypes.bool
};

export default NoteItem;
