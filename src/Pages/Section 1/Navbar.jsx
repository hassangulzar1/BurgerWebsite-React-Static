import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav id="navbar" class="navbar navbar-expand-lg">
      <div class="container d-flex flex-column justify-content-center ">
        <div id="logo" className=" text-center">
          <img src="/Assets/logo.png" alt="" />
        </div>

        <ul class=" d-flex justify-content-start mt-5">
          <li class="item me-lg-5">
            <a href="#home">HOME</a>
          </li>
          <li class="item me-lg-5 ms-lg-5">
            <a href="#Product">PRODUCT</a>
          </li>
          <li class="item me-lg-5 ms-lg-5">
            <a href="#promo">PROMO</a>
          </li>
          <li class="item me-lg-5 ms-lg-5">
            <a href="#about">ABOUT</a>
          </li>
          <li class="item me-lg-5 ms-lg-5">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <nav
        id="navbar"
        className="d-flex flex-column flex-sm-row justify-content-sm-between justify-content-center"
      >
        <div id="logo" className=" text-center">
          <img src="/Assets/logo.png" alt="" />
        </div>
        <ul className=" d-flex">
          <li class="item">
            <a href="#home">HOME</a>
          </li>
          <li class="item">
            <a href="#Product">PRODUCT</a>
          </li>
          <li class="item">
            <a href="#promo">PROMO</a>
          </li>
          <li class="item">
            <a href="#about">ABOUT</a>
          </li>
          <li class="item">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav> */
}
