import React from "react";
import mail from '../assets/contact/email.png'

const BodyContact = () => {

  return (
    <section>
      <div className="contact__container">
        <img src={mail} alt="mail" />
        <div>
          <h3 className="content__subtitle">Mail</h3>
          <p className="contact_content">Podés escribirnos por mail a da.digitalalpha@gmail.com. No te olvides de incluir tu número de DNI y el detalle de tu consulta</p>
        </div>
      </div>
    </section>
  )
}

export default BodyContact