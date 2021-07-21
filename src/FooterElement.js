import React from "react";
import "./Footer.css";

function FooterElement({ item }) {
  return (
    <div className="footerElement">
      <h1>{item.title}</h1>
      {item.field.map((link)=>{
       return <div className="footerElement__link">
        {link}
       </div>
      })}
    </div>
  );
}

export default FooterElement;
