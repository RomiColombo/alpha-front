import React, { useState } from "react";
import steps from "../helpers/steps.json"
import line from "../assets/line.png"
import ImgModal from './modals/imgModal';
import struct from "../helpers/struct.json"


const BodyProcess = () => {

  const [imgSelect, setImgSelect] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const open = ({ img, title }) => {
    console.log(img, title)
    console.log('entre')
    setImgSelect(img);
    setImgTitle(title);
    setOpenModal(true);
  }

  console.log('imgSelect '+imgSelect)
  console.log('imgtitle '+imgTitle)
  console.log('openmodal '+openModal)

  return (
    <>
      <section className='aboutUs'>
        <div className="title__container">
          <h3 className='aboutUs__title'>Nuestro recorrido</h3>
          <p className='aboutUs__subtitle'>Paso a paso</p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step__container ">
              <p className="step__date">{step.date}</p>
              <img src={line} alt="line" className="step__line" />
              <div className="step__info square">
                <p className="step__sprint">{step.title}</p>
                <p className="step__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='aboutUs'>
        <div className="title__container">
          <h3 className='aboutUs__title'>Estructura</h3>
          <p className='aboutUs__subtitle'>El esqueleto de Alpha</p>
        </div>

        {struct.map((str, index) => (
          <div key={index} className="struct" onClick={() => open({ img: `images/process/${str.img}`, title: `${str.title}` })}>
            {index % 2 === 0 &&
              <div className='struct__container'>
                <img src={`images/process/${str.img}`} alt={`estructura del ${str.title}`}  />
                <div>
                  <p className='struct__num'>{str.number}</p>
                  <p className="struct__title ">{str.title}</p>
                  <h3 className="struct__desc">{str.description}</h3>
                </div>
              </div>
            }
            {index % 2 !== 0 &&
              <div key={index} className='struct__container' onClick={() => open({ img: `images/process/${str.img}`, title: `${str.title}` })}>
                <div>
                  <p className='struct__num'>{str.number}</p>
                  <p className="struct__title ">{str.title}</p>
                  <h3 className="struct__desc">{str.description}</h3>
                </div>
                <img src={`images/process/${str.img}`} alt={`estructura del ${str.title}`}  />
              </div>
            }
          </div>
        ))}


        {openModal && <ImgModal imgUrl={imgSelect} imgTitle={imgTitle} setImgSelect={setImgSelect} setImgTitle={setImgTitle} setOpenModal={setOpenModal} />}
      </section>
    </>


  )
}

export default BodyProcess;