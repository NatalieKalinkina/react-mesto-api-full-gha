import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      id="2"
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        type="url"
        className="popup__text popup__text_type_avatar"
        name="avatar"
        placeholder="Ссылка на картинку"
        id="avatar-input"
        required
        ref={avatarRef}
      />
      <p className="popup__text-error avatar-input-error"></p>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
