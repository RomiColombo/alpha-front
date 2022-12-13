import React from "react";
import Footer from '../components/Footer';
import contact from '../assets/contact/contact.jpg'
import SubsectionHeader from "../components/SubsectionHeader"
import BodyContact from "../components/BodyContact";

const Contact = () => {


  return (
    <body>
      <SubsectionHeader title={"Contacto"} subtitle={"¿Necesitas comunicarte con Alpha?"} description={"Te dejamos toda la información"} img={contact} />
      <main>
        <BodyContact />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  )
}


export default Contact;