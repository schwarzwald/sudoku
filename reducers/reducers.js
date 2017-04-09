import { combineReducers } from 'redux'
import {UPDATE_CELL, UNDO, RESTART, SOLVE, HINT} from '../actions/actions.js';
import solver from '../sudoku/solver.js';

const updateProgress = (state = { values: new Array(81).fill(0), history: [] }, action) => {
  switch (action.type) {
    case UPDATE_CELL: return updateAndAddToHistory(state, action.position, action.value);
    case UNDO: return undo(state);
    case RESTART: return restart(state);
    case SOLVE: return solve(state);
    case HINT: return hint(state);
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

const restart = (state) => {
  let nextState = Object.assign({}, state);
  nextState.history = [];
  nextState.values = new Array(81).fill(0);
  nextState.solution = [];
  return nextState;
}

const solve = (state) => {
  let nextState = Object.assign({}, state);
  let history = state.history.slice();
  history.push(state.values.slice());
  nextState.values = state.solution.length == 0? solver.solve(state.puzzle): state.solution;
  nextState.solution = nextState.values;
  nextState.history = history;
  return nextState;
}

const hint = (state) => {
  let nextState = Object.assign({}, state);
  let history = state.history.slice();
  history.push(state.values.slice());
  nextState.history = history;
  if (state.solution.length == 0) {
    nextState.solution = solver.solve(state.puzzle);
  }

  let i = Math.abs(Math.floor(Math.sin(state.values.filter(v => v == 0).length)*81));

  while (state.values[i] != 0 || state.puzzle[i] != 0) {
    i = (i + 37) % 81;
  }
  nextState.values = state.values.slice();
  nextState.values[i] = nextState.solution[i];

  return nextState;
}

export default combineReducers({
  progress: updateProgress
})
