import React from "react";
import "./Introsection.css";

function Introsection(props) {
  console.log(props);
  return (
    <div className="introSection">
      <div className="introSectionInfo">
        <h1>
          {props.heading} <span>{props.headingSpan}</span>
        </h1>
        {/* <p>
            Calendly is your hub for scheduling meetings professionally and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work.
          </p> */}
        <p>{props.para}</p>
        <form className="introSectionInfoForm">
          {props.form && <input placeholder="Enter your email"></input>}
          <button>{props.button}</button>
          {props.form && (
            <p>Create your free account. No credit card required</p>
          )}
        </form>
      </div>
      <img src={props.img}></img>
    </div>
  );
}

export default Introsection;
