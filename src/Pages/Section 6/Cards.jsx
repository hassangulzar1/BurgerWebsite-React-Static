import React from "react";
import ButtonSecondary from "../../Components/ButtonSecondary";

function Cards(props) {
  const classes =
    "col-3 d-flex align-items-center flex-column card-1 " + props.offset;
  return (
    <div className={classes}>
      <h3 className="text-uppercase text-center mt-3 fs-1">{props.name}</h3>
      <img
        className=" img-fluid"
        src="/Assets/Place Your Image Here (Double Click to Edit)17.png"
        alt=""
      />
      <h4 className="text-center mt-3 fs-1">{props.price}</h4>
      <p className="text-center fs-3">{props.desc}</p>
      <ButtonSecondary font="1.2rem" name="ORDER NOW" />
    </div>
  );
}

export default Cards;
