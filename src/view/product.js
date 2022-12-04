import React from "react";
import Menu from "../components/Menu";
import HeaderSections from "../components/HeaderSections"
import Technologies from "../components/Technologies";
import Steps from "../components/Steps";
import Structure from "../components/Structure";
import Footer from "../components/Footer";


const Product = () => {
  return (
    <>
      <header className="header">
        <Menu />
        <HeaderSections />
      </header>
      <Technologies />
      <main className="main">
        <Steps />
        <Structure />       
      </main>
      <Footer />
    </>


  )
}

export default Product;