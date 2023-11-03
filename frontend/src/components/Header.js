import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ email, onSignOut }) {
  const location = useLocation();
  const mainPage = '/';
  const signInPage = '/sign-in';

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="логотип проекта Место" />
      <nav className="header__menu">
        <p className="header__email">{email}</p>
        {location.pathname === mainPage ? (
          <Link
            to="sign-in"
            className="header__link"
            style={{ color: '#a9a9a9' }}
            onClick={onSignOut}
          >
            Выйти
          </Link>
        ) : location.pathname === signInPage ? (
          <Link to="sign-up" className="header__link">
            Регистрация
          </Link>
        ) : (
          <Link to="sign-in" className="header__link">
            Войти
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
