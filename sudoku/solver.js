import sudoku_solver from '../lib/kudoku.js';

export default {
  solve : (values) => {
    let solver = sudoku_solver()
    return solver(values.map(v => v?v:'.').join(''), 1)[0];
  }
}
