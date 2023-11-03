import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {
  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  function handlePlaceChange(event) {
    setPlace(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: place,
      link: link
    });
  }

  React.useEffect(() => {
    setPlace('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      id="3"
      name="image"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <input
        type="text"
        className="popup__text popup__text_type_image-name"
        name="name"
        placeholder="Название"
        id="place-input"
        required
        minLength="2"
        maxLength="30"
        value={place}
        onChange={handlePlaceChange}
      />
      <p className="popup__text-error place-input-error"></p>
      <input
        type="url"
        className="popup__text popup__text_type_image-src"
        name="link"
        placeholder="Ссылка на картинку"
        id="url-input"
        required
        value={link}
        onChange={handleLinkChange}
      />
      <p className="popup__text-error url-input-error"></p>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
