import React from "react";

function Chefs(props) {
  return (
    <div class="col d-flex align-items-center flex-column offset-md-1">
      <img src={props.img} alt="" />
      <h3
        style={{
          color: "#f91803",
          fontSize: "2.5rem",
          fontWeight: "700",
          fontFamily: "Archivo",
        }}
        class="mt-3"
      >
        {props.name}
      </h3>
      <p
        style={{
          fontSize: "2rem",
          color: "#f91803",
          fontWeight: "600",
          fontFamily: "Nunito",
        }}
      >
        {props.lable}
      </p>
    </div>
  );
}

export default Chefs;
