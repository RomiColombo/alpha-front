import React from "react";
import NavBar from "./NavBar";

const SubsectionHeader = ({ title, subtitle, description, img }) => {

  return (
    <header className="subsection">
      <NavBar />
      <div className="subsection__header">
        <div className="subsection__header-left">
          <h1>{title}</h1>
          <h3>
            {subtitle}
          </h3>
          <p>{description}</p>
        </div>
        <img src={img} alt={title} className="subsection__img" />
      </div>
    </header>
  )
}

export default SubsectionHeader;