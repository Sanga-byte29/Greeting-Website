import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currDate = new Date(2022, 3, 31, 24);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {
  // color: 'green'
};

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
} else {
  greeting = " How Are You";
  cssStyle.color = "Violet";
}
ReactDOM.render(
  <>
    <div>
      <h1>
        {" "}
        Hi Alisha,<span style={cssStyle}>{greeting}</span>
      </h1>
      ,
    </div>
  </>,
  document.getElementById("root")
);
