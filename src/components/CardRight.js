import React from "react";
import "./CardRight.css";
function CardRight({image, title, heading, disc}) {
  return (
    <div className="cardright">
      <div className="cardright__info">
        <h4>{title}</h4>
        <h1>{heading}</h1>
        <p>{disc}</p>
      </div>
      <div className="cardright__image">
        <img src={image}></img>
      </div>
    </div>
  );
}

export default CardRight;
