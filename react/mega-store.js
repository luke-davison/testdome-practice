import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const PriceCalculator = () => {
  const [type, setType] = useState("standard");
  const [weight, setWeight] = useState("0");
  const [price, setPrice] = useState("0");

  let discountedPrice = Number(price);
  if (type === "standard") {
    discountedPrice *= 1 - 0.06;
  } else if (type === "seasonal") {
    discountedPrice *= 1 - 0.12;
  } else if (type === "weight") {
    if (Number(weight) <= 10) {
      discountedPrice *= 1 - 0.06;
    } else {
      discountedPrice *= 1 - 0.18;
    }
  }

  return (
    <div>
      <label htmlFor="type">Select Type:</label>
      <select
        id="type"
        name="type"
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        <option value="standard">Standard</option>
        <option value="seasonal">Seasonal</option>
        <option value="weight">Weight</option>
      </select>

      <label htmlFor="weight">Weight (kg):</label>
      <input
        type="number"
        id="weight"
        name="weight"
        step="0.01"
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
      />

      <label htmlFor="totalPrice">Total Price ($):</label>
      <input
        type="number"
        id="totalPrice"
        name="totalPrice"
        step="0.01"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <div>
        Discounted price:
        <span id="discountedPrice">{discountedPrice}</span>
      </div>
    </div>
  );
};

document.body.innerHTML = "<div id='root'></div>";

const root = createRoot(document.getElementById("root"));
root.render(<PriceCalculator />);
