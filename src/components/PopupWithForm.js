import React from "react";

function PopupWhithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} 
        ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <form className="popup__form" name={`${props.name}`} noValidate />
        <h3 className="popup__title">{`${props.title}`}</h3>
        {props.children}
        <button type="submit" className="popup__button">
          {props.onSubmit}
        </button>
      </div>
    </section>
  );
}

export default PopupWhithForm;