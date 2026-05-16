// https://www.testdome.com/questions/javascript/boat-movements/134848

function canTravelTo(gameMatrix, fromRow, fromColumn, toRow, toColumn) {
  const possibleMovements = [
    [[0, -1]],
    [[0, 1]],
    [[-1, 0]],
    [[1, 0]],
    [
      [0, 2],
      [0, 1]
    ]
  ];

  const movement = possibleMovements.find(
    (group) =>
      fromRow + group[0][0] === toRow && fromColumn + group[0][1] === toColumn
  );

  if (!movement) return false; // invalid

  const result = movement.every(([rowOffset, colOffset]) => {
    return gameMatrix[fromRow + rowOffset][fromColumn + colOffset] === true;
  });

  return result;
}

const gameMatrix = [
  [false, true, true, false, false, false],
  [true, true, true, false, false, false],
  [true, true, true, true, true, true],
  [false, true, true, false, true, true],
  [false, true, true, true, false, true],
  [false, false, false, false, false, false]
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds
