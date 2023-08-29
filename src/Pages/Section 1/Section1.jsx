import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
function Section1() {
  const section1 = {
    content: "",
    background: "url(/Assets/1.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    zIndex: "-1",
  };
  return (
    <div style={section1}>
      <Navbar />
      {/* <!-- !Home section --> */}
      <div class="container" id="home">
        <div className="row">
          <div className="col-12 col-xl-8">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
