import React from "react";
import About from "../components/About";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const AboutUs = () => {

  return (
    <>
      <header className="header">
        <Menu />
        <div className="header__intro">
          <h1 className="header__title">
            Construímos nuevos mundos
          </h1>
          <h3 className="header__subtitle">Somos <span>Alpha</span></h3>
        </div>
      </header>
      <main className="main">
        <About />
      </main>
      <Footer />
    </>
  )
}

export default AboutUs;
