import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/Auth.js';

function Login({ onLogin }) {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then(data => {
        if (data.token) {
          setFormValue({ email: '', password: '' });
          onLogin();
          navigate('/', { replace: true });
        }
      })
      .catch(console.error);
  }

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">Вход</h2>
        <form
          className="login__form"
          name="form-login"
          autoComplete="off"
          id="login_form-edit"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="login__text login__text_type_email"
            name="email"
            id="email"
            placeholder="Email"
            required
            minLength="2"
            maxLength="40"
            value={formValue.email}
            onChange={handleChange}
          />

          <input
            type="password"
            className="login__text login__text_type_password"
            name="password"
            id="password"
            placeholder="Пароль"
            minLength="2"
            maxLength="200"
            required
            value={formValue.password}
            onChange={handleChange}
          />
          <button type="submit" className="login__submit-button" id="login-submit-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
