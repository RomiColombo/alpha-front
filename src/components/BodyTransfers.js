import React from "react";
import security from "../assets/functionalities/transfers/security.png"
import transfersac from "../assets/functionalities/transfers/transfersac.png"
import debit from "../assets/functionalities/transfers/debit.png"

const BodyTransfers = () => {

  return (
    <>
      <section className="content__info">
        <div className="content__individual">
          <img src={transfersac} alt="transfer" />
          <h3 className="content__subtitle">Transferencias a cuentas bancarias y/o virtuales</h3>
          <p className="content__description">Podés recibir transferencias desde cualquier cuenta a tu Alpha wallet. También podés enviar dinero a otras cuentas desde la sección “Transferencias”</p>
        </div>
        <div className="content__individual">
          <img src={debit} alt="debit" />
          <h3 className="content__subtitle">Ingresá dinero desde tu tarjeta de débito</h3>
          <p className="content__description">Podés ingresar dinero a tu Alpha wallet desde cualquier tarjeta de débito que esté a tu nombre</p>
        </div>
        <div className="content__individual">
          <img src={security} alt="security" />
          <h3 className="content__subtitle">Seguridad</h3>
          <p className="content__description">Para realizar una transferencia desde Alpha necesitas el token que create cuando te registraste</p>
        </div>
      </section>
    </>
  )

}

export default BodyTransfers;