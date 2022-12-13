import React from "react";
import Footer from '../components/Footer';
import SubsectionHeader from "../components/SubsectionHeader"
import process from '../assets/aboutUs/process.jpg'
import BodyProcess from "../components/BodyProcess";

const Process = () =>{

  return(
    <body>
    <SubsectionHeader title={"Nuestro recorrido"} subtitle={"Paso a paso"}
      description={"¡En Alpha crecimos un montón! Te compartimos nuestro proceso durante estos dos meses"}
      img={process} />
    <main>
      <BodyProcess />
    </main>
    <footer>
      <Footer />
    </footer>
  </body>

  )


}

export default Process;