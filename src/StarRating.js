import Star from "./Star";
import { useState } from "react";
const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
  //gap: "4px",
};
const textStyle = {
  lineHeight: "1",
  margin: "0",
};
//allow the user to set maximum rating so accept the prop from App.js here:maxRating
//pass it into length instead of hard coding it by using a number
//set a default value of  say 5:{maxRating=5}
export default function StarRating({ maxRating = 5 }) {
  //since we want the ui to render when something happens,we need state
  const [rating, setRating] = useState(0);
  //handling the hover event
  const [tempRating, setTempRating] = useState(0);
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {/*generate the stars dynamically;i+1 because i is zero based*/}
        {Array.from({ length: maxRating }, (_, i) => (
          // <span>S{i + 1}</span>
          <Star
            key={i}
            onRate={() => setRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            //handling the hover event
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
}
