import React from "react";
import "./Loader.css";

const Loader = ({ color = "primary" }) => {
  return (
    <div className="loader-page">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
