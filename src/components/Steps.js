import React from "react";
import steps from "../helpers/steps.json"
import line from "../assets/line.png"

const Steps = () => {

  return (
    <section className="main__section">
      <div className="title__container">
        <p className="main__subtitle">Nuestro recorrido</p>
        <h3 className="main__title">Paso a paso en estos dos meses</h3>
      </div>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step__container ">
            <p className="step__date">{step.date}</p>
            <img src={line} alt="line" className="step__line" />
            <div className="step__info square">
              <p className="step__sprint">{step.title}</p>
              <i class="fa fa-ellipsis-v line-separator"></i>
              <p className="step__description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

}

export default Steps;