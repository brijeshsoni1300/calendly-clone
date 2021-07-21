import React from "react";
import "./HeadingPara.css";

function HeadingPara({heading, para}) {
  return (
    <div className="headingpara">
      <div className="headingpara__heading">
        <h1>{heading}</h1>
      </div>
      <div className="headingpara__para">
        <p>{para}</p>
      </div>
    </div>
  );
}

export default HeadingPara;
