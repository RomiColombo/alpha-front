import React from "react";
import logo from "../assets/logo/alpha-white.png"

const Menu = () => {
  return (
    <nav className="menu">
      <img src={logo} alt="Alpha logo" className="menu__logo" />
      <ul className="menu__options">
        <li className="menu__options-individual"><a>Home</a></li>
        <li className="menu__options-individual"><a href="#aboutUs">Sobre nosotros</a></li>
        <li className="menu__options-individual"><a>Productos</a></li>
      </ul>
    </nav>
  )
}

export default Menu;