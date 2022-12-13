import React from "react";
import functionalities from "../helpers/functionalities.json";
import bePart from "../helpers/bePart.json";
import transfer from "../assets/addMoney/transfer.png"
import card from "../assets/addMoney/card.png"
import { Link } from "react-router-dom";

const BodyHome = () => {

  return (
    <>
      <section className="home__functionalities">
        <h2 className="home__functionalities__title">Mirá lo que podés hacer con tu Alpha Wallet</h2>
        <div className="home__functionalities__container">
          {functionalities.map((func, index) => (
            <Link to={func.url} className="link">
              <div key={index} className="home__functionalitie">
                <img src={`images/functionalities/${func.img}`} alt={`${func.title}`} className="home__functionalities__img" />
                <h3 className="home__functionalitie__title">{func.title}</h3>
                <p className="home__functionalitie__desc">{func.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="home__beAlpha">
        <h2 className="home__beAlpha__title">Cómo ser parte de Alpha</h2>
        <div className="home__beAlpha__container">
          {bePart.map((step, index) => (
            <div key={index}>
              <div className="home__beAlpha__stepCont">
                <p className="home__beAlpha__number">{step.step}</p>
                <img src={`images/bePart/${step.img}`} alt={`step number ${step.step}`} className="home__beAlpha__img" />
              </div>
              <p className="home__beAlpha__description">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="home__addMoney">
        <h2 className="home__addMoney__title">Ingresá dinero a tu Alpha Wallet</h2>
        <div className="home__addMoney__container">
          <div className="home__addMoney__way">
            <img src={transfer} alt="transfer ico" />
            <h4 className="home__addMoney__subtitle">Transferencia desde otra cuenta con CVU</h4>
          </div>
          <div className="home__addMoney__way">
            <img src={card} alt="card ico" />
            <h4 className="home__addMoney__subtitle">Depósito desde una tarjeta de débito</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default BodyHome;