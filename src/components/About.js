import React from "react";
import team from "../helpers/team.json"
import card from '../assets/card.png'
import values from "../helpers/values.json"

const About = () => {
  return (
    <>
      <section className="main__section" id="aboutUs">
        <div className="aboutUs__header">
          <p className="main__subtitle">Sobre nosotros</p>
          <h3 className="main__title">Somos desarrolladores, somos backenders, somos Alpha</h3>
        </div>
        <div className="aboutUs">
          <img src={card} alt="alpha card" />
          <div>
            <p className="aboutUs__description">
              Digital Money Alpha combina la tecnologia y la experiencia, para eliminar las barreras en el sector financiero.
            </p>
            <button className="contactBtn">Contacto</button>
          </div>
        </div>
      </section>
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
      <section className="main__section">
        <div>
          <p className="main__subtitle">Nuestros valores</p>
          <h3 className="main__title">Que nos define</h3>
        </div>
        <div className="values">
          {
            values.map((value, index) => (
              <div key={index} className="value__card">
                <img src={`images/value/${value.img}`} alt={`img from ${value.title}`} className="value__img" />
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

export default About;