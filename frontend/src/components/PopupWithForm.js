import React from 'react';

function PopupWithForm({ isOpen, name, title, onSubmit, children, onClose, buttonText }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id={`popup_${name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`form-${name}`} autoComplete="off" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__submit-button" id="image-submit-button">
            {buttonText}
          </button>
        </form>
        <button
          type="button"
          className="popup__close-button button"
          aria-label="Закрыть окно редактирования"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
