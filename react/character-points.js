// https://www.testdome.com/questions/react-js/character-points/151996

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function CharacterPoints({ totalPoints }) {
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);

  const pointsRemaining = totalPoints - strength - speed;

  const onChange = (speedChange, strengthChange) => {
    if (speedChange) {
      const newSpeed = Math.max(Math.min(speed + speedChange, totalPoints), 0);
      setSpeed(newSpeed);

      if (pointsRemaining === 0 && speedChange > 0) {
        setStrength(totalPoints - newSpeed);
      }
    } else {
      const newStrength = Math.max(
        Math.min(strength + strengthChange, totalPoints),
        0
      );
      setStrength(newStrength);

      if (pointsRemaining === 0 && strengthChange > 0) {
        setSpeed(totalPoints - newStrength);
      }
    }
  };

  return (
    <div>
      Character stats: <span>{pointsRemaining}</span> points
      <div>
        <button onClick={() => onChange(0, -1)}>-</button>
        <input
          type="number"
          step="1"
          style={{ width: "50px", textAlign: "center" }}
          readOnly
          value={strength}
        />
        <button onClick={() => onChange(0, 1)}>+</button>
        Strength
      </div>
      <div>
        <button onClick={() => onChange(-1, 0)}>-</button>
        <input
          type="number"
          step="1"
          style={{ width: "50px", textAlign: "center" }}
          readOnly
          value={speed}
        />
        <button onClick={() => onChange(1, 0)}>+</button>
        Speed
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<CharacterPoints totalPoints={5} />);
