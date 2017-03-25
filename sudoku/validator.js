
const validate = (values) => {
  let invalid = [];

  for (let i=0; i<9; i++) {
    let invalidInRow = validateGroup(values.filter((v, k) => Math.floor(k/9) == i));
    let invalidInCol = validateGroup(values.filter((v, k) => (k % 9) == i));
    let invalidInMatrix = validateGroup(values.filter((v, k) => (3*Math.floor(k/27) + Math.floor((k % 9)/3)) == i));

    invalid = invalid.concat(invalidInRow.map(v => v + i*9))
                     .concat(invalidInCol.map(v => v*9 + i))
                     .concat(invalidInMatrix.map(v =>  Math.floor(v/3)*9 + (v % 3) + (i % 3 )*3 + Math.floor(i/3)*27));
  }
  return invalid;
}

const validateGroup= (group) => {
    let invalid = [];
    for (let i in group) {
      if (group.filter(v => group[i] != 0 && group[i] == v).length > 1) {
        invalid.push(parseInt(i));
      }
    }
    return invalid;
}

export default validate;
