import React from "react";
import "./Section3.css";
import ButtonSecondary from "../../Components/ButtonSecondary";
function Section3() {
  return (
    <div
      class="container-fluid d-flex align-items-center section-3"
      id="Product"
    >
      <div class="container">
        <div class="row">
          <div class="col d-flex align-items-center mt-5">
            <img class="mt-5" src="/Assets/Shape.png" alt="" />
          </div>
          <div class="col mt-5 d-flex justify-content-start flex-column title-3">
            <h1 class="mt-5">Best Burger</h1>
            <p class="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              soluta numquam beatae cupiditate eum, velit magni sed eos odit
              sit!
            </p>
            <div className="mt-5">
              <ButtonSecondary name="ORDER NOW" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
