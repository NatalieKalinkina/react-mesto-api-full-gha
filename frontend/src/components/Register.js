import React from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(formValue.email, formValue.password);
  }

  return (
    <div className="register">
      <div className="register__container">
        <h2 className="register__title">Регистрация</h2>
        <form
          className="register__form"
          autoComplete="off"
          id="register_form-edit"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="register__text register__text_type_email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formValue.email}
            onChange={handleChange}
          />

          <input
            type="password"
            className="register__text register__text_type_password"
            name="password"
            id="password-input"
            placeholder="Пароль"
            required
            value={formValue.password}
            onChange={handleChange}
          />
          <button type="submit" className="register__submit-button" id="register-submit-button">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__signin">
          <p className="register__signin-text">Уже зарегистрированы?&nbsp;</p>
          <Link to="/sign-in" className="register__signin-link button">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
