import React from 'react';
import struct from '../helpers/struct.json'

const Structure = () => {

  return (
    <section className="main__section">
      {struct.map((str, index) => (
        <div key={index}>
          {index % 2 === 0 &&
            <div className='struct struct-right'>
              <div style={{ backgroundImage: `url(images/struct/${str.img})` }} className="struct__img">
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
              <div style={{ backgroundImage: `url(images/struct/${str.img})` }} className="struct__img">
              </div>
            </div>
          }
        </div>
      ))}
    </section>
  )
}

export default Structure;