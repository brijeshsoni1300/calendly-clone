import React from "react";
import "./VerticalCard.css";

function VerticalCard({ image, para, heading }) {
  return (
    <div className="verticalCard">
      <div className="verticalCard__img">
        <img src={image}></img>
      </div>
      <div className="verticalCard__info">
        <div className="verticalCard__infoHead">
          <h1>{heading}</h1>
        </div>
        <div className="verticalCard__infoPara">
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
