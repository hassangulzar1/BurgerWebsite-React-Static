import React from "react";
import "./Section8.css";
const Section8 = () => {
  return (
    <div
      class="container-fluid d-flex align-items-center section-8"
      id="contact"
    >
      <div class="container my-5">
        <div class="row">
          <div class="col">
            <h1 class="text-center">Don't miss our Update</h1>
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              Placeat nostrum et quibusdam corporis.
            </p>
          </div>
          <div class="row mt-5 ms-5">
            <div class="col ms-5 d-flex align-items-center">
              <input
                type="email"
                class="form-control w-50 ms-5"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
              <div class="custm-btn">SUBSCRIBE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
