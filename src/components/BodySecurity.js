import React, { useState } from "react";
import Accordion from './modals/Accordion'
import security from '../helpers/security.json'

const BodySecurity = () => {

  const [visibility, setVisibility] = useState(false);


  return (
    <section>
      {security.map((sec, index) => (
        <Accordion title={sec.title} src={sec.img} content={sec.description} key={index} />
      ))}

    </section>
  )

}


export default BodySecurity;