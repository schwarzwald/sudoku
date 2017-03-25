import {connect} from 'react-redux';
import { undo } from '../../actions/actions.js';
import Button from '../button.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(undo());
    }
  }
}

const mapStateToProps = (state) => {
  return {
      text : 'Undo'
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
