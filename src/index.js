import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import { useState } from "react";
//import "./index.css";
//import App from "./App";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*allow the user to set the maxRating*/}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    {/*eg of reusing the StarRating component*/}
    <StarRating size={24} color="red" className="test" />
    <Test />
  </React.StrictMode>
);
