import React from "react";
import Footer from '../components/Footer';
import SubsectionHeader from "../components/SubsectionHeader"
import team from "../assets/aboutUs/team.jpg"
import BodyUs from "../components/BodyUs"

const AboutUs = () => {
  return (
    <body>
      <SubsectionHeader title={"Nosotros"} subtitle={"Somos Alpha"}
        description={"En Alpha combinamos la tecnologia y la experiencia para eliminar las barreras en el sector financiero"}
        img={team} />
      <main>
        <BodyUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  )

}

export default AboutUs