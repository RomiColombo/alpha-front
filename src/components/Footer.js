import React from "react";
import alpha from "../assets/logo/alpha.png"

const Footer = () => {

  return (
    <div className="footer">

      <div>
        <img src={alpha} alt="alpha logo" />
        <p className="footer__content">Construímos nuevos mundos</p>
        <p className="copyright">© 2022 - Digital Alpha</p>
      </div>
      <div>
        <p className="footer__title">Funcionalidades</p>
        <ul className="footer__content">
          <li className="footer__content-option"><a href="/funcionalidades/transferencias">Transferencias</a></li>
          <li className="footer__content-option"><a href="/funcionalidades/compras">Compras</a></li>
          <li className="footer__content-option"><a href="/funcionalidades/pagos">Pagos</a></li>
        </ul>
      </div>
      <div>
        <p className="footer__title">Sobre Alpha</p>
        <ul className="footer__content">
          <li className="footer__content-option"><a href="/nosotros/equipo">Nosotros</a></li>
          <li className="footer__content-option"><a href="/nosotros/proceso">El proceso</a></li>
        </ul>
      </div>
      <div>
        <p className="footer__title">Contacto y seguridad</p>
        <ul className="footer__content">
          <li className="footer__content-option"><a href="/contactoyseguridad/contacto">Contacto</a></li>
          <li className="footer__content-option"><a href="/contactoyseguridad/seguridad">Consejos de seguridad</a></li>
        </ul>
      </div>

    </div>

  )


}

export default Footer;