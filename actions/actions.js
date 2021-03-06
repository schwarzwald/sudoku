export const UPDATE_CELL = "UPDATE_CELL"
export const updateCell = (position, value) => {
  return {
    type: UPDATE_CELL,
    position: position,
    value: value
  }
}

export const UNDO = "UNDO";
export const undo = () => {
  return {
    type: UNDO
  }
}

export const RESTART = "RESTART";
export const restart = () => {
  return {
    type: RESTART
  }
}

export const SOLVE = "SOLVE";
export const solve = () => {
  return {
    type: SOLVE
  }
}

export const HINT = "HINT";
export const hint = () => {
  return {
    type: HINT
  }
}
