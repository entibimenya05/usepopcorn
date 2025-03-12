import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
//import "./index.css";
//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*allow the user to set the maxRating*/}
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
  </React.StrictMode>
);
