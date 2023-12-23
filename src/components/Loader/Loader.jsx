import React from "react";
import "./Loader.css";

const Loader = ({ color = "primary" }) => {
  return (
    <div className={`lds-roller ${color}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
