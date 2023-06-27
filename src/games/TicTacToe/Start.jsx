import React from "react";
import "./Box.css";
const Start = ({ resetBoard }) => {
  return (
    <button onClick={() => resetBoard()} className="start-btn">
      Start Over
    </button>
  );
};

export default Start;
