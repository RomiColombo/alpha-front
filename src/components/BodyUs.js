import React from 'react';
import team from "../helpers/team.json"
import values from "../helpers/values.json"
import { Link } from "react-router-dom";

const BodyUs = () => {

  return (
    <>
      <section className='aboutUs'>
        <div>
          <h2 className='aboutUs__title'>El equipo</h2>
          <p className='aboutUs__subtitle'>Las personas detrás de Alpha</p>
        </div>
        <div className="aboutUs__team">
          {
            team.map((member, index) => (
              <a href={member.link} className='link' target="_blank" rel="noopener noreferrer">
                <div key={index} className="team__card">
                  <img src={`images/team/${member.img}`} alt={`img from ${member.name}`} className="team__img" />
                  <p className="team__name">{member.name}</p>
                  <p className="team__rol">{member.dev}</p>
                </div>
              </a>
            ))
          }
        </div>
      </section>
      <section className='aboutUs'>
        <div>
          <h2 className='aboutUs__title'>Nuestros valores</h2>
          <p className='aboutUs__subtitle'>Los pilares que nos guiaron durante este</p>
        </div>
        <div className="values">
          {
            values.map((value, index) => (
              <div key={index} className="value__card">
                <img src={`images/values/${value.img}`} alt={`img from ${value.title}`} className="value__img" />
                <div>
                  <p className="value__title">{value.title}</p>
                  <p className="value__desc">{value.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )

}

export default BodyUs;