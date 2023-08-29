import React from "react";
import "./Section4.css";
function Section4() {
  return (
    <div class="container-fluid d-flex align-items-center section-4">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col mt-5 title-4">
            <h1 class="mt-5">Big Burger</h1>
            <p class="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              soluta numquam beatae cupiditate eum, velit magni sed eos odit
              sit!
            </p>
            <button class="btn mt-5">ORDER NOW</button>
          </div>
          <div class="col mt-5">
            <img class="mt-5" src="/Assets/burger2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
