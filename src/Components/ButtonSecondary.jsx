import React from "react";
import "./ButtonSecondary.css";
function ButtonSecondary(props) {
  return (
    <button style={{ fontSize: props.font }} class="btn-2">
      {props.name}
    </button>
  );
}

export default ButtonSecondary;
