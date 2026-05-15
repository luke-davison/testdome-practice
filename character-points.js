function initialize(totalPoints) {
  let strength = 0;
  let speed = 0;

  const pointsElement = document.getElementById("points");
  pointsElement.textContent = totalPoints;

  const strengthInput = document.getElementById("strength");
  strengthInput.value = strength;
  const strengthPlus = document.getElementById("strength-plus");
  const strengthMinus = document.getElementById("strength-minus");

  const speedInput = document.getElementById("speed");
  speedInput.value = speed;
  const speedPlus = document.getElementById("speed-plus");
  const speedMinus = document.getElementById("speed-minus");

  const getOnchange = (isSpeed, isPlus) => () => {
    if (isSpeed) {
      if (isPlus && speed < totalPoints) {
        speed++;
        strength = Math.min(strength, totalPoints - speed);
      }

      if (!isPlus && speed > 0) {
        speed--;
      }
    } else {
      if (isPlus && strength < totalPoints) {
        strength++;
        speed = Math.min(speed, totalPoints - strength);
      }

      if (!isPlus && strength > 0) {
        strength--;
      }
    }

    speedInput.value = speed;
    strengthInput.value = strength;
    pointsElement.textContent = totalPoints - strength - speed;
  };

  strengthPlus.addEventListener("click", getOnchange(false, true));
  strengthMinus.addEventListener("click", getOnchange(false, false));
  speedPlus.addEventListener("click", getOnchange(true, true));
  speedMinus.addEventListener("click", getOnchange(true, false));
}

// Do not modify the HTML below
document.body.innerHTML = `
  <div>
    Character stats: <span id="points">0</span> points
    <div>
      <button id="strength-minus">-</button>
      <input
        type="number"
        id="strength"
        step="1"
        style="width: 50px; text-align: center;"
        readonly
      />
      <button id="strength-plus">+</button>
      Strength
    </div>
    <div>
      <button id="speed-minus">-</button>
      <input
        type="number"
        id="speed"
        step="1"
        style="width: 50px; text-align: center;"
        readonly
      />
      <button id="speed-plus">+</button>
      Speed
    </div>
  </div>
`;

initialize(5);
