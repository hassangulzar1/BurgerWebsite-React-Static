import React from "react";
import Chefs from "./Chefs";
function Section2() {
  return (
    <div
      class="container-fluid d-flex align-items-center"
      style={{
        content: "",
        background: "url(/Assets/2.png)",
        height: "100vh",
        width: "100%",
      }}
      id="about"
    >
      <div class="container">
        <div class="row">
          <div class="col mt-5 text-center">
            <h1
              style={{
                fontFamily: "Archivo, sans-serif",
                fontSize: "5rem",
                fontWeight: "700",
                color: "#f91803",
              }}
            >
              Our Chef
            </h1>
            <p
              class="mt-4"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#f91803",
                fontWeight: "400",
                fontSize: "1.7rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium harum officiis, <br />
              assumenda itaque voluptatibus delectus vero.
            </p>
          </div>
        </div>
        <div class="row mt-5 d-flex align-items-center title-2">
          <Chefs name="AIDEN HUNTER" lable="Founder" img="/Assets/Mask.png" />
          <Chefs
            name="ETHEL RAMSEY"
            lable="Co-Founder"
            img="/Assets/mask 2.png"
          />
          <Chefs
            name="FANNIE STEWART"
            lable="Co-Founder"
            img="/Assets/mask 3.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
