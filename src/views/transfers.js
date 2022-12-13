import React, { useEffect } from "react";
import Footer from '../components/Footer';
import transfers from "../assets/functionalities/transfers/transfers.jpeg"
import SubsectionHeader from "../components/SubsectionHeader"
import BodyTransfers from "../components/BodyTransfers"

const Transfers = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <body>
      <SubsectionHeader title={"Transferencias"} subtitle={"Enviá y recibí dinero de todos"} description={"Enviá y recibí dinero desde cualquier cuenta bancaria o virtual"} img={transfers} />
      <main>
        <BodyTransfers />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  )
}

export default Transfers;