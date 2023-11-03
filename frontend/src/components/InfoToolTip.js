import React from 'react';
import successIcon from '../images/success-icon.svg';
import unsuccessIcon from '../images/unsuccess-icon.svg';

function InfoToolTip({ isRegisterSuccess, onClose, isOpen }) {
  return (
    <div className={`info ${isOpen && 'info_opened'}`}>
      <div className="info__container">
        {isRegisterSuccess ? (
          <>
            <img className="info__icon" src={successIcon} alt="Вы успешно зарегистрировались" />
            <h2 className="info__title">Вы успешно зарегистрировались!</h2>
          </>
        ) : (
          <>
            <img className="info__icon" src={unsuccessIcon} alt="Что-то пошло не так!" />
            <h2 className="info__title">Что-то пошло не так! Попробуйте ещё раз.</h2>
          </>
        )}
        <button
          type="button"
          className="popup__close-button button"
          aria-label="Закрыть окно"
          id="info_close-button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
