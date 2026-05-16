// https://www.testdome.com/questions/react-js/change-username/149718

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Username = ({ value }) => {
  return <h1>{value}</h1>;
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const onSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <button onClick={onSubmit}>Change Username</button>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Username value={submittedValue} />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
