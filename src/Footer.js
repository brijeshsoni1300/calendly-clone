import React from 'react'
import data from "./footerData";
import "./Footer.css";
import FooterElement from './FooterElement';
import CalendlyOffer from "./components/CalendlyOffer"

function Footer() {
 return (
   <footer className="footer">
   <div className="footer__calendlyOffer">
    <CalendlyOffer />
   </div>
  <div className="footer__actual"> 
     <div className="footer__ease">
    <h1>Easy<br/><span>ahead</span></h1>
   </div>
   <div className="footer__info" >
   {data.map((item)=>{
     return <FooterElement key={item.id} item={item} />
   })}
   </div>
  </div>
   </footer>
 )
}

export default Footer;


