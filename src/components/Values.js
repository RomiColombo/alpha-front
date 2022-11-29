import React from "react";
import values from "../helpers/values.json"

const Values = () => {
  return (
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
  )
}

export default Values;