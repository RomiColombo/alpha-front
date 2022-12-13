import React, { useEffect } from "react";
import Footer from '../components/Footer';
import card from "../assets/card.png"
import SubsectionHeader from "../components/SubsectionHeader"
import BodyBuys from "../components/BodyBuys"

const Buy = () =>{

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <body>
      <SubsectionHeader title={"Compras"} subtitle={"Una tarjeta para todo"} description={"Aprovechá tu Alpha Card y comprá en cualquier eCommerce que acepte Mastercard"} img={card} />
      <main>
        <BodyBuys />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  )
}

export default Buy;