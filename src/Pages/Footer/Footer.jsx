import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="container-fluid d-flex align-items-center footer">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <h4>title Here</h4>
            <p class="mt-5">
              Lorem ipsum dolor sit amet adipisicing elit. Adipisci earum
              laudantium enim incidunt, repudiandae ea quos.
            </p>
            <img src="/Assets/social media.png" alt="" />
          </div>
          <div class="col-2 offset-md-1">
            <h4>about</h4>
            <p>
              <a href="">history</a>
              <br />
              <a href="">Our team</a>
              <br />
              <a href="">Brand guidelines</a>
              <br />
              <a href="">Tearms & conditions</a>
              <br />
              <a href="">Privacy Policy</a>
            </p>
          </div>
          <div class="col-2">
            <h4>Services</h4>
            <p>
              <a href="">How to Order</a> <br />
              <a href="">Our Product</a> <br />
              <a href="">Order status</a> <br />
              <a href="">Promo</a> <br />
              <a href="">Payment method</a>
            </p>
          </div>
          <div class="col-2">
            <h4>Other</h4>
            <p>
              <a href="">Contact Us</a>
              <br />
              <a href="">Help</a>
              <br />
              <a href="">Privacy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
