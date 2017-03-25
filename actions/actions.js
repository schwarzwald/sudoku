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
