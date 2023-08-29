import React from "react";
import Cards from "./Cards";
import "./Section6.css";
function Section6() {
  return (
    <div class="container-fluid d-flex align-items-center section-6">
      <div class="container my-5">
        <div class="row d-flex justify-content-between">
          <div class="col">
            <h1 class="text-center my-5">Popular Package</h1>
          </div>
        </div>
        <div class="row mt-3">
          <Cards
            name="PACKAGE I"
            price="$10.00"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia."
          />
          <Cards
            offset="offset-md-1"
            name="PACKAGE II"
            price="$20.00"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia."
          />
          <Cards
            offset="offset-md-1"
            name="PACKAGE III"
            price="$30.00"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia."
          />
        </div>
      </div>
    </div>
  );
}

export default Section6;
