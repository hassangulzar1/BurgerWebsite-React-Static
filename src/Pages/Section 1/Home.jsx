import React from "react";
import ButtonPrimary from "../../Components/ButtonPrimary";
function Home() {
  const h1 = {
    color: "white",
    fontWeight: "bold",
    fontSize: "9rem",
    fontFamily: "Archivo, sans-serif",
    letterSpacing: ".2rem",
  };
  const p = {
    color: "white",
    fontSize: "2rem",
    marginTop: "20px",
    fontFamily: "Nunito, sans-serif",
  };

  return (
    <div>
      <h1 style={h1}>
        Get Cashback <br />
        up to 50%
      </h1>
      <p style={p}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Non assumenda soluta quos nihil sed voluptate dolorem,
        <br />
        ab a, pariatur neque, sequi ipsum .
      </p>
      <ButtonPrimary text="ORDER NOW" />
    </div>
  );
}

export default Home;
