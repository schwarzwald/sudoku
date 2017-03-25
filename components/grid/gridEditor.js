import React from 'react';
import '../../sass/gridEditor.scss';

const CLASS_EDITOR = "grid-editor";
const CLASS_SELECTED = "selected";

class GridEditor extends React.Component {

  render() {
    let children = [];
    for (let i=0; i<=9; i++) {
      children.push(new Option(i, this.props.value == i, this.props.onSelect));
    }
    return (<div className={ CLASS_EDITOR }>{ children }</div>)
  }
}

const Option = (value, isSelected, onSelect) => ((
  <div key={value} className={isSelected? CLASS_SELECTED: ""} onClick={ e => onSelect(value) }>{ value }</div>
));

GridEditor.propTypes = {
  onSelect: React.PropTypes.func.isRequired
}

export default GridEditor;
