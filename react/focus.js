// https://www.testdome.com/questions/react-js/focus/149875

import React, { useEffect, useRef, forwardRef } from "react";
import { createRoot } from "react-dom/client";

const Input = ({ forwardedRef, ...otherProps }) => {
  return <input {...otherProps} ref={forwardedRef} />;
};

const TextInput = forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

const FocusableInput = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (props.focused && ref.current) {
      ref.current.focus();
    }
  }, [props.focused]);

  return <TextInput ref={ref} />;
};

const App = (props) => <FocusableInput focused={props.focused} />;

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
