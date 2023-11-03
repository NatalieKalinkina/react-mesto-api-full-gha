import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Card from './Card';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__person">
          <div className="profile__image">
            <div
              className="profile__avatar"
              style={{
                backgroundImage: `url(${currentUser.avatar})`
              }}
            ></div>
            <div className="profile__edit-avatar" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__first-line">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__edit-button open-button button"
                aria-label="Редактировать профиль"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__about">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button open-button button"
          aria-label="Добавить фото"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="Секция с фотографиями">
        {cards.map(card => (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            id={card._id}
            owner={card.owner}
            card={card}
            likes={card.likes}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
