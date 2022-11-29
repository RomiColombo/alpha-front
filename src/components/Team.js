import React from "react";
import team from "../helpers/team.json"

const Team = () => {
  return (
    <section className="main__section">
      <div>
        <p className="main__subtitle">El equipo</p>
        <h3 className="main__title">Las personas detrás de Alpha</h3>
      </div>
      <div className="team">
        {
          team.map((member, index) => (
            <div key={index} className="team__card">
              <img src={`images/team/${member.img}`} alt={`img from ${member.name}`} className="team__img" />
              <p className="team__name">{member.name}</p>
              <p className="team__rol">{member.dev}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Team;