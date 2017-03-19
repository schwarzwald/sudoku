import { combineReducers } from 'redux'
import {UPDATE_CELL} from '../actions/actions.js';

const values = (state = new Array(81).fill(0), action) => {
  console.log('reducer', action)
  if (action.type == UPDATE_CELL) {
    let nextState = state.slice();
    nextState[action.position] = action.value;
    return nextState;
  }
  return state;
}

export default combineReducers({
  values
})
