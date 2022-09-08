import React from 'react';
import { Link } from "react-router-dom";

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.isRegistration(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <section className="authorization">
      <h2 className="authorization__header">Регистрация</h2>
      <form
        className="authorization__form"
        onSubmit={handleSubmit}>
        <input
          className="authorization__input"
          name="userEmail"
          onChange={handleEmail}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="authorization__input"
          name="userPassword"
          onChange={handlePassword}
          type="password"
          placeholder="Пароль"
          required
        />

        <button className="popup__btn-save authorization__button" type="submit">Зарегистрироваться</button>
        <Link className="authorization__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
      </form>

    </section>
  )
}

export default Register;