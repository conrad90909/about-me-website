import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faReact, faHTML5 } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

function Skills() {
  const element = <FontAwesomeIcon icon={faArrowAltCircleLeft} />;

  return (
    <div>
      <section id="skills">
        <h2>Skills</h2>
        <div id="skills-container">{element}</div>
      </section>
    </div>
  );
}

export default Skills;
