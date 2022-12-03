import React from "react";
import technologies from "../helpers/technologies.json"


const Technologies = () => {
  return (
    <section className="technologies">
      <div className="technologies__content">
        {technologies.map((tech, index) => (
          <img src={`images/apps/${tech.img}`} alt={tech.name} key={index} className="technologies__img" />
        ))}
      </div>
    </section>
  )

}

export default Technologies;

