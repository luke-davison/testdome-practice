// https://www.testdome.com/questions/react-js/toggle-message/149716

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

const Message = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <React.Fragment>
      <a href="#" onClick={() => setShowPhone(!showPhone)}>
        Want to buy a new car?
      </a>
      {showPhone && <p>Call +11 22 33 44 now!</p>}
    </React.Fragment>
  );
};

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

flushSync(() => {
  root.render(<Message />);
});
console.log("Before click: " + rootElement.innerHTML);

flushSync(() => {
  document.querySelector("a").click();
});
console.log("After click: " + rootElement.innerHTML);
