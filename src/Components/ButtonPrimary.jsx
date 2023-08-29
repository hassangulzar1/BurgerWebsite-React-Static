import React from "react";
import "./ButtonPrimary.css";
function ButtonPrimary(props) {
  return <button className="btn">{props.text}</button>;
}

export default ButtonPrimary;
