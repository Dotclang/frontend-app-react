import React from "react";

const Spinner = ({ text }) => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="spinner-text">{text}</div>
    </div>
  );
};

export default Spinner;
