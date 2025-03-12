import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    //not you can't use {} on isOpen && children,it will return an error
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
export default Box;
