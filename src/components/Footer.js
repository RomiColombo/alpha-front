import React from "react";
import alpha from "../assets/logo/alpha.png"

const Footer = () => {

  return (
    <footer className="footer">
      <div>
        <img src={alpha} alt="alpha logo" />
        <p className="footer__content">Construímos nuevos mundos</p>
        <div>
          <i class="fa fa-gitlab footer__socialMedia"></i>
          <i class="fa fa-instagram footer__socialMedia"></i>
          <i class="fa fa-twitter footer__socialMedia"></i>
        </div>
        <p className="copyright">© 2022 - Digital Alpha</p>
      </div>
      <div>
        <p className="footer__title">Alpha links</p>
        <ul className="footer__content">
          <li className="footer__content-option"><a>Home</a></li>
          <li className="footer__content-option"><a href="#aboutUs">Sobre Nosotros</a></li>
          <li className="footer__content-option"><a>Digital Alpha Money</a></li>
        </ul>
      </div>
      <div>
        <p className="footer__title">Contactanos</p>
        <p className="footer__content">da.digitalalpha@gmail.com</p>
      </div>
    </footer>
  )

}

export default Footer;