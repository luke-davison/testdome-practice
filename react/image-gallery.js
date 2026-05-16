// https://www.testdome.com/questions/react-js/image-gallery-app/149717

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const ImageGallery = ({ links }) => {
  const [displaying, setDisplaying] = useState(Array.from(links));

  const onRemove = (index) => {
    displaying.splice(index, 1);
    setDisplaying(Array.from(displaying));
  };

  return (
    <div>
      {displaying.map((link, index) => (
        <div key={index} className="image">
          <img src={link} />
          <button className="remove" onClick={() => onRemove(index)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
const links = [
  "https://tinyurl.com/im-gal-1st",
  "https://tinyurl.com/im-gal-2nd"
];
const root = createRoot(rootElement);
root.render(<ImageGallery links={links} />);

setTimeout(() => {
  document.querySelectorAll(".remove")[0]?.click();
  setTimeout(() => {
    console.log(rootElement?.innerHTML);
  });
});
