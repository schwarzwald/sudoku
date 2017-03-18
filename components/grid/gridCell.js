import React from 'react';

const CLASS_GRID_CELL = "grid-cell";
const CLASS_GRID_CELL_STATIC = "static";
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
  }

  onClick() {
    this.setState({
      isEditing : true
    })
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
      this.props.static? CLASS_GRID_CELL_STATIC: null
    ].filter(c => c != null).join(" ");

    return (
      <div className={classes} onClick = { this.onClick }>{ this.props.value }</div>
    )
  }
}

GridCell.propTypes = {
  value: React.PropTypes.number.isRequired,
  position: React.PropTypes.number.isRequired,
  static: React.PropTypes.bool
}

GridCell.defaultProps = {
  static: false
}

export default GridCell
