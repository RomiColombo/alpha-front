import React from "react";
import About from "../components/About";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";

const AboutUs = () => {

  return (
    <>
      <header className="header">
        <Menu />
        <HeaderHome />
      </header>
      <main className="main">
        <About />
      </main>
      <Footer />
    </>
  )
}

export default AboutUs;
