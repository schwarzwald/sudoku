import React from 'react';

import GridCell from './gridCell.js';
import style from './grid.scss';

const CLASS_GRID = "grid";
const CLASS_GRID_ROW = "grid-row";

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
      <div className={CLASS_GRID}>
        { rows }
      </div>
    )
  }
}

const GridRow = (children) => (
  <div className={CLASS_GRID_ROW}>
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
