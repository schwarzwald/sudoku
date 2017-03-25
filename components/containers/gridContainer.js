import { connect } from 'react-redux';
import Grid from '../grid/grid.js'
import { updateCell } from '../../actions/actions.js'

const mapStateToProps = (state, props) => {
  return {
    values: state.progress.values,
    puzzle: props.puzzle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (position, value) => {
      dispatch(updateCell(position, value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
