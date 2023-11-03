import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ onUpdateUser, isOpen, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      id="1"
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        type="text"
        className="popup__text popup__text_type_name"
        name="name"
        id="name-input"
        placeholder="Введите имя"
        required
        minLength="2"
        maxLength="40"
        value={name || ''}
        onChange={handleNameChange}
      />
      <p className="popup__text-error name-input-error"></p>
      <input
        type="text"
        className="popup__text popup__text_type_about"
        name="about"
        id="about-input"
        placeholder="Введите профессию"
        minLength="2"
        maxLength="200"
        required
        value={description || ''}
        onChange={handleDescriptionChange}
      />
      <p className="popup__text-error about-input-error"></p>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
