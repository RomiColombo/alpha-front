import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/alpha-white.png"
import submenu from "../helpers/submenu.json"


const NavBar = () => {

  const [isActive, setIsActive] = useState(false)
  const [option, setOption] = useState()

  const showMenu = ({ optionSelected }) => {
    if (option == null && isActive == false) {
      setIsActive(!isActive)
      setOption(optionSelected)
    }
    else if (option == optionSelected && isActive==true) {
      setIsActive(!isActive)
      setOption(null)
    }
    else if (option != null && isActive == true) {
      setOption(optionSelected)
    }
  }

  return (
    <nav className="menu">
      <div className={`menu__top ${isActive ? "" : 'active'}`}>
        <div className="menu__left">
          <Link to="/">
            <img src={logo} alt="Alpha logo" className="menu__logo" />
          </Link>
          <ul className="menu__options">
            <li className="menu__options-individual" onClick={() => showMenu({ optionSelected: 0 })}>Funcionalidades</li>
            <li className="menu__options-individual" onClick={() => showMenu({ optionSelected: 1 })}>Contacto y seguridad</li>
            <li className="menu__options-individual" onClick={() => showMenu({ optionSelected: 2 })}>Sobre Alpha</li>
          </ul>
        </div>
        <a className="menu_goApp">Ingresar</a>

      </div>
      {
        isActive &&
        <div className="menu__bottom">
          <ul className="menu__bottom__options">
            {submenu[option].map((menu, index) => (
              <li className="menu__options-individualbottom" key={index}><a href={menu.url}>{menu.title}</a></li>
            ))}
          </ul>

        </div>
      }

    </nav>
  )
}

export default NavBar;