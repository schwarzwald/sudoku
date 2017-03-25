import { combineReducers } from 'redux'
import {UPDATE_CELL, UNDO} from '../actions/actions.js';

const updateProgress = (state = { values: new Array(81).fill(0), history: [] }, action) => {
  switch (action.type) {
    case UPDATE_CELL: return updateAndAddToHistory(state, action.position, action.value);
    case UNDO: return undo(state);
    default: return state;
  }
}

const updateAndAddToHistory = (state, position, value) => {
  let nextState = Object.assign({}, state);
  let history = state.history.slice();
  history.push(state.values.slice());
  nextState.values = state.values.slice();
  nextState.values[position] = value;
  nextState.history = history;
  return nextState;
}

const undo = (state) => {
  let nextState = Object.assign({}, state);
  let history = state.history.slice();
  nextState.values = history.pop() || state.values;
  nextState.history = history;
  return nextState;
}

export default combineReducers({
  progress: updateProgress
})
