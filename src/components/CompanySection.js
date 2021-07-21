import React from "react";
import "./CompanySection.css";


function CompanySection() {
  return (
    <div className="home__companySection">
      <div className="home__company">
        <h1>
          Simplified scheduling for more than <span>200,000,000</span> meetings
        </h1>
        <div className="home__companyLogo">
          <div className="home__companyLogoImg">
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2hDXRTJ8GBvGvFew8TZLSM/f15bee8de363080dd1ae486f246c7242/Compass.svg"></img>
          </div>
          <div className="home__companyLogoImg">
            {" "}
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/rexKRdC9CB00Jh616eiD5/82174ec98a18d6a40478868e2a8521bf/drop.svg"></img>
          </div>
          <div className="home__companyLogoImg">
            {" "}
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2ck9ANAgxoASegsTLVaTLW/c3e53db0a0a7e0dad8b73ba75525d7ee/ebay.svg"></img>
          </div>
          <div className="home__companyLogoImg">
            {" "}
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/2uC8mx63tSkNEh1Kt2Fnn3/e11a46ad74d725b2b9b68080d50b0733/Lazboy.svg"></img>
          </div>
          <div className="home__companyLogoImg">
            {" "}
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/4K6SLVWDlOPfJfkUrb51H/0df0b02496eba8768bffc193d9bc576e/Gartner.svg"></img>
          </div>
          <div className="home__companyLogoImg">
            {" "}
            <img src="https://images.ctfassets.net/k0lk9kiuza3o/1kEJVQrmrXOhTKiZbNpGWV/d71c4890960ea1e7fbe9977f90dd7c9c/twilio.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySection;
