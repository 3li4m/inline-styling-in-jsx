import React from "react";
import ReactDOM from "react-dom";

// if this was html we could use 'style="..."' which would not be right to use in JSX
// within JSX it will want the value as a JS object
// EG
// key:value seperated via commas not semicolens eg inline would look like {color: "red"}
// wrapped around {} -- {{color: "red"}}

// useful for when you want the react elements to update dynamically

// the values for key value pairs have to be strings eg
// border : 1px solid black will be border : "1px solid black"
const customStyle = {
  color: "red",
  fontSize: "100px",
  border: "1px solid black"
};

// to change style the style we do not need to change the code we just need to update the
// properties of the style object  eg
customStyle.color = "blue";
customStyle.border = "5px solid black";
ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
    <p style={{ fontSize: "50px", color: "orange" }}>Paragraph</p>
  </div>,
  document.getElementById("root")
);
