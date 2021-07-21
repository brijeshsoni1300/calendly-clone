import React from "react";
import "./CalendlyWorking.css";

function CalendlyWorking() {
  return (
    <div className="calendlyWorking">
      <div className="calendlyWorking__img">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      </div>
      <div className="calendlyWorking__infos">
        <div className="calendlyWorking__info">
          <div className="calendlyWorking__infoLine">
            <div></div>
          </div>

          <div className="calendlyWorking__infoText">
            <h1>Create simple rules</h1>
            <p>
              Let Calendly know your availability preferences and it’ll do the
              work for you.
            </p>
          </div>
        </div>
        <div className="calendlyWorking__info">
          <div className="calendlyWorking__infoLine">
            <div></div>
          </div>
          <div className="calendlyWorking__infoText">
            <h1>Share your link</h1>
            <p>
			Send guests your Calendly link or embed it on you website.
            </p>
          </div>
        </div>
        <div className="calendlyWorking__info">
          <div className="calendlyWorking__infoLine"></div>
          <div className="calendlyWorking__infoText">
            <h1>Get booked</h1>
            <p>
              They pick a time and the event is added to your calendar.
			  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendlyWorking;
