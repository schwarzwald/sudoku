import React from 'react';

import GridCell from './gridCell.js';
import style from './grid.scss';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.cellClickedHandler.bind(this);
  }

  cellClickedHandler(cellProps) {
    console.log(this);
    alert('clicked' + cellProps.value);
  }

  render() {
    let rows = [];
    for (let i=0; i < 81; i++) {
      if (i % 9 == 0) {
        rows.push(
          new GridRow(
            this.props.values.slice(i, i + 9).map((v, p)=> <GridCell key={i+p} value={v} position={i+p} />)
          )
        );
      }
    }

    return (
      <div className="grid">
        { rows }
      </div>
    )
  }
}

const GridRow = (children) => (
  <div className="gridRow">
    { children }
  </div>
)

Grid.propTypes = {
  values: React.PropTypes.array.isRequired
}

Grid.defaultProps = {
  values : new Array(81).fill(0)
}

export default Grid
