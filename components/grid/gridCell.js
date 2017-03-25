import React from 'react';
import { Overlay } from 'react-bootstrap';
import GridEditor from './gridEditor.js';

const CLASS_GRID_CELL = "grid-cell";
const CLASS_GRID_CELL_STATIC = "static";
const CLASS_GRID_CELL_INVALID = "invalid";
const CLASS_TOP = "top";
const CLASS_LEFT = "left";
const CLASS_RIGHT = "right";
const CLASS_BOTTOM = "bottom";

class GridCell extends React.Component {

  constructor() {
    super();
    this.state = {
      isEditing : false
    }

    this.onClick = this.onClick.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  openEditor() {
    this.setState({
      isEditing : true
    })
  }

  closeEditor() {
    this.setState({
      isEditing : false
    })
  }

  onClick(e) {
    if (e.target != this.refs.target) {
      return;
    }
    if (!this.props.static) {
      this.openEditor();
    }
  }

  onSelect(value) {
    this.closeEditor();
    this.props.onUpdate(this.props.position, value);
  }

  render() {
    let row = Math.floor(this.props.position / 9);
    let col = this.props.position % 9;

    let classes = [
      CLASS_GRID_CELL,
      row % 3 == 0? CLASS_TOP: null,
      col % 3 == 0? CLASS_LEFT: null,
      col % 9 == 8? CLASS_RIGHT: null,
      row % 9 == 8? CLASS_BOTTOM: null,
      !this.props.isValid? CLASS_GRID_CELL_INVALID: null,
      this.props.static? CLASS_GRID_CELL_STATIC: null
    ].filter(c => c != null).join(" ");

    return (
      <div ref="target" className={ classes } onClick = { this.onClick }>
        { this.props.value || "" }
        <Overlay
          animation={ false }
          show={ this.state.isEditing }
          onHide={ this.closeEditor }
          container={ this }
          target={ () => this }
          rootClose={ true }>
          <GridEditor value={ this.props.value } onSelect={ this.onSelect } />
        </Overlay>
      </div>
    )
  }
}

GridCell.propTypes = {
  value: React.PropTypes.number.isRequired,
  position: React.PropTypes.number.isRequired,
  static: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
  onUpdate: React.PropTypes.func.isRequired
}

GridCell.defaultProps = {
  static: false
}

export default GridCell
