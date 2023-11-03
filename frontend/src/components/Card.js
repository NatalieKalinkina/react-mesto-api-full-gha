import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, link, name, likes, owner, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = owner._id === currentUser._id;
  const isLiked = likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `${
    isLiked ? 'card__like-button card__like-button_active' : 'card__like-button'
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleCardLike() {
    onCardLike(card);
  }

  function handleCardDelete() {
    onCardDelete(card);
  }

  return (
    <div className="card">
      <img src={link} className="card__image" onClick={handleCardClick} alt={name} />
      {isOwn && (
        <button
          type="button"
          onClick={handleCardDelete}
          className="card__delete-button"
          aria-label="Удалить карточку"
        />
      )}
      <div className="card__caption">
        <h2 className="card__title">{name}</h2>
        <div className="card__like">
          <button
            type="button"
            className={cardLikeButtonClassName}
            aria-label="Поставить/снять 'лайк'"
            onClick={handleCardLike}
          ></button>
          <p className="card__like-counter">{likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
