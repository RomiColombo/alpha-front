import React, { useState } from "react";
import arrow from '../../assets/arrow.png'


const Accordion = ({ title, content, src }) => {

    const [visiblity, setVisiblity] = useState(false);

    const toogleVisiblity = () => {
        setVisiblity((v) => !v);
    };

    return (
        <div className={`advice ${visiblity ? "advice-active" : ""}`}>
            <div className="advice__header" onClick={toogleVisiblity}>
                <div className="advice__header-left">
                    <img src={`images/${src}`} alt={title} />
                    <h3 className="advice__title">{title}</h3>
                </div>
                <img src={arrow} className="accordion-icon"/>
            </div>
            <div className="advice__description">
                {content.map((cont, index) =>(
                    <p key={index}>{cont}</p>
                ))}
            </div>
        </div>
    );
}

export default Accordion;