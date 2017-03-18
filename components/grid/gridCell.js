import React from 'react';

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
    return (
      <div className="gridCell" onClick = { this.onClick }>{ this.props.value }</div>
    )
  }
}

GridCell.propTypes = {
  value: React.PropTypes.number.isRequired,
  position: React.PropTypes.number.isRequired,
  clickHandler: React.PropTypes.func
}

export default GridCell
