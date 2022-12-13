import React from "react";
import shop from "../assets/functionalities/buy/shop.png"
import receipt from "../assets/functionalities/buy/receipt.png"
import deposit from "../assets/functionalities/buy/deposit.jpeg"

const BodyBuys = () => {

  return (
    <>
      <section className="content__info">
        <div className="content__individual">
          <img src={shop} alt="shop" />
          <h3 className="content__subtitle">Comprá con un solo click</h3>
          <p className="content__description">Al registrarte contarás con una Alpha Card digital para hacer compras online</p>
        </div>
        <div className="content__individual">
          <img src={receipt} alt="receipt" />
          <h3 className="content__subtitle">Actualización de gastos en tiempo real</h3>
          <p className="content__description">Podés seguir los consumos con tu Alpha Card en tiempo real desde la web</p>
        </div>
      </section>
      <section className="buy__deposit">
        <img src={deposit} alt="deposit" className="subsection__img"/>
        <div>
          <h3 className="buy__subtitle">Ingresá dinero a tu cuenta para usar tu Alpha Card</h3>
          <p className="buy__description">Mediante un depósito o transferencia</p>
        </div>
      </section>
    </>
  )

}

export default BodyBuys;