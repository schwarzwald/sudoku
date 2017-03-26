import { connect } from 'react-redux';
import Button from '../button.js';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(ownProps.action())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      text : ownProps.text
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
