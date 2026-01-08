import { useState } from "react";
import "./Experience.scss";

function Experience() {
  return (
    <div className="experienceContainer">
      <h1> Experience</h1>
      <div className="companiesContainer">
        <div className="jobContainer">
          <img className="companyLogo" src="images/logos/codeninjas.jpg" />
          <h2>Code Ninjas </h2>
          <p> Code Sensei & Camp Director & Curriculum Developer </p>
        </div>
        <div className="jobContainer">
          <img
            className="companyLogo"
            src="images/logos/GCL_Logo_yellow1.png"
          />
          <h2> Gen City Labs </h2>
          <p> Technical Director & Senior Developer</p>
        </div>
        <div className="jobContainer">
          <img className="companyLogo" src="images/logos/mercor_logo.png" />
          <h2> Mercor </h2>
          <p> QA Engineer & Software Engineer</p>
        </div>
        <div className="jobContainer">
          <img className="companyLogo" src="images/logos/diamondmech.png" />
          <h2>Diamond Mechanicals </h2>
          <p> Senior Web Developer and Designer </p>
        </div>
        <div className="jobContainer">
          <img className="companyLogo" src="images/logos/kobologo.svg" />
          <h2>Kobo Toolbox </h2>
          <p> Front End Engineer </p>
        </div>
        <div className="jobContainer">
          <img className="companyLogo" src="images/logos/helios_logo.png" />
          <h2>Helios Interactive</h2>
          <p> Technical Director & Senior Developer</p>
        </div>
        <div className="jobContainer">
          <img className="companyLogo" src="images/logos/bose.svg" />
          <h2> Bose </h2>
          <p> Technical Intern</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
