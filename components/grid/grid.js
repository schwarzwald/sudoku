import React from 'react';

import GridCell from './gridCell.js';
import style from '../../sass/grid.scss';

import validate from '../../sudoku/validator.js';

const CLASS_GRID = "grid";
const CLASS_GRID_ROW = "grid-row";

class Grid extends React.Component {

  render() {
    let rows = [];
    let invalid = validate(this.getMergedValues());
    for (let i=0; i < 81; i++) {
      if (i % 9 == 0) {
        rows.push(
          new GridRow(
            this.props.values.slice(i, i + 9).map((v, p) =>
              <GridCell
                key={ i + p }
                value={ this.props.puzzle[i+p] || v }
                position={ i + p }
                onUpdate={ this.props.onUpdate }
                isValid={ invalid.indexOf(i+p) == -1 }
                static={ this.props.puzzle[i+p] != 0 }
              />),
            Math.floor(i / 9)
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

  getMergedValues() {
    let values = this.props.values;
    return this.props.puzzle.map((k, i)=> k || values[i]);
  }
}

const GridRow = (children, key) => (
  <div key={ key } className={ CLASS_GRID_ROW }>
    { children }
  </div>
)

Grid.propTypes = {
  puzzle: React.PropTypes.array.isRequired,
  values: React.PropTypes.array.isRequired,
  onUpdate: React.PropTypes.func.isRequired
}

export default Grid;
