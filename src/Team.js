import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="team">
      <div className="team__introSection">
        <img src="https://images.ctfassets.net/k0lk9kiuza3o/1CcwCOhCJgbEsuXJHj2uwL/363226858ceff73764e2606a2bf88dac/Companies.png?w=779&h=908&q=50&fm=webp"></img>
        <div className="team__introSectionInfo">
          <h1><span>Power up</span> your teams</h1>
          <p>
            Calendly gives you control over team scheduling with a standardized,
            scalable process. It’s secure, easy to manage, and integrates with
            your team's favorite tools, so you can get everyone working as
            efficiently and effectively as possible.
          </p>
          <div className="team__introSectionInfo__buttons">
            <button className="team__introSectionInfo__startForFree">
              start for free
            </button>
            <button className="team__introSectionInfo__contactSales">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      <div className="team__streamlineTasks">
        <h1>Streamline tasks, extend team reach</h1>
      </div>
    </div>
  );
}

export default Team;
