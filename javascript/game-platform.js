// https://www.testdome.com/questions/javascript/game-platform/139118

function calculateFinalSpeed(initialSpeed, inclinations) {
  return inclinations.reduce((total, angle) => {
    if (total === 0) return total;
    return Math.max(0, total - angle);
  }, initialSpeed);
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));
