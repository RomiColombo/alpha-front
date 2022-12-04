import React, { useState } from 'react';
import struct from '../helpers/struct.json'
import ImgModal from './modals/imgModal';

const Structure = () => {

  const [imgSelect, setImgSelect] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const open = ({ img, title }) => {
    setImgSelect(img);
    setImgTitle(title);
    setOpenModal(true);
  }

  return (
    <section className="main__section">
      <div className="title__container">
        <p className="main__subtitle">Estructura</p>
        <h3 className="main__title">El esqueleto de Alpha</h3>
      </div>
      <div className='struct__container'>
        {struct.map((str, index) => (
          <div key={index}>
            {index % 2 === 0 &&
              <div className='struct struct-right'>
                <div className="struct__img">
                  <img src={`images/struct/${str.img}`} alt={`estructura del ${str.title}`} onClick={() => open({ img: `${str.img}`, title: `${str.title}` })} />
                </div>
                <div className="struct__content">
                  <p className='struct__num'>{str.number}</p>
                  <p className="struct__title ">{str.title}</p>
                  <h3 className="struct__desc">{str.description}</h3>
                </div>
              </div>
            }
            {index % 2 !== 0 &&
              <div className='struct struct-left'>
                <div className="struct__content">
                  <p className='struct__num'>{str.number}</p>
                  <p className="struct__title ">{str.title}</p>
                  <h3 className="struct__desc">{str.description}</h3>
                </div>
                <div className="struct__img">
                  <img src={`images/struct/${str.img}`} alt={`estructura del ${str.title}`} onClick={() => open({ img: `${str.img}`, title: `${str.title}` })} />
                </div>
              </div>
            }
          </div>
        ))}

      </div>

      {openModal && <ImgModal imgUrl={imgSelect} imgTitle={imgTitle} setImgSelect={setImgSelect} setImgTitle={setImgTitle} setOpenModal={setOpenModal} />}
    </section>
  )
}

export default Structure;