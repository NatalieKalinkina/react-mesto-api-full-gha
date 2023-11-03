import React from 'react';

function ImagePopup({ isOpen, link, name, onClose }) {
  return (
    <div className={`popup bigImagePopup ${isOpen && 'popup_opened'}`} id="popup_image-big">
      <figure className="bigImagePopup__container">
        <img src={link} className="bigImagePopup__image" alt={name} />
        <figcaption className="bigImagePopup__caption">{name}</figcaption>
        <button
          type="button"
          className="popup__close-button button"
          aria-label="Закрыть фото"
          id="big-image_close-button"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
