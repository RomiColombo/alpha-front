import React from "react";
import cross from "../../assets/cross.svg"

const ImgModal = ({ imgUrl, imgTitle, setOpenModal, setImgSelect, setImgTitle }) => {

  const closeModal = () => {
    setImgSelect("")
    setImgTitle("")
    setOpenModal(false)
  }

  return (
    <div className='struct__modal'>
      <div className='struct__modal-content' onClick={closeModal}>
        <div className="struct__modal-closeIcon">
          <img src={cross} alt="cross icon" onClick={closeModal} width={15} />
        </div>
        <img src={`images/struct/${imgUrl}`} className='struct__img-full' alt="image from struct" />
        <p>{imgTitle}</p>
      </div>
    </div>
  )

}

export default ImgModal