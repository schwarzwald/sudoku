import React from 'react';

const CLASS_SELECTED = "selected";

class GridEditor extends React.Component {

  render() {
    let children = [];
    for (let i=1; i<=9; i++) {
      children.push(new Option(i, this.props.value == i, this.props.onSelect));
    }
    return (<div>{ children }</div>)
  }
}

GridEditor.propTypes = {
  onSelect: React.PropTypes.func.isRequired
}

const Option = (value, isSelected, onSelect) => ((
  <div key={value} className={isSelected? CLASS_SELECTED: ""} onClick={ e => onSelect(value) }>{ value }</div>
));

export default GridEditor;
