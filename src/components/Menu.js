import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/alpha-white.png"

const Menu = () => {

  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} alt="Alpha logo" className="menu__logo" />
      </Link>
      <ul className="menu__options">
        <li className="menu__options-individual"><a href="/">Home</a></li>
        <li className="menu__options-individual"><a href="/#aboutUs">Sobre nosotros</a></li>
        <li className="menu__options-individual"><a href="/digitalAlpha">Productos</a></li>
        <li><button className="menu_btnApp">Ir a la app</button></li>
      </ul>
    </nav>
  )
}

export default Menu;