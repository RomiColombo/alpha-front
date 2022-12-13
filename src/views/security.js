import React from "react";
import Footer from '../components/Footer';
import security from '../assets/contact/security.jpg'
import SubsectionHeader from "../components/SubsectionHeader"
import BodySecurity from "../components/BodySecurity";


const Security = () =>{

  return (
    <body>
      <SubsectionHeader title={"Seguridad"} subtitle={"Tu seguridad es nuestra prioridad"} description={"Te dejamos consejos para operar de forma segura"} img={security} />
      <main>
        <BodySecurity />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  )
}

export default Security;