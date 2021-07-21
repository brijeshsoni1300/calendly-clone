import React from "react";
import "./CardLeft.css";
function CardLeft({ image, title, heading, disc }) {
  return (
    <div className="cardleft">
      <div className="cardleft__image">
        <img src={image}></img>
      </div>
      <div className="cardleft__info">
        <h4>{title}</h4>
        <h1>{heading}</h1>
        <p>{disc}</p>
      </div>
    </div>
  );
}

export default CardLeft;
