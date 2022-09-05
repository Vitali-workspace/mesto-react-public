import { Link } from "react-router-dom";

function Register(props) {

  return (
    <section className="authorization">
      <h2 className="authorization__header">Регистрация</h2>
      <form className="authorization__form">
        <input
          className="authorization__input"
          // value={'isName' || ''}
          // onChange={''}
          type="text"
          placeholder="Email"
          required
        />
        <input
          className="authorization__input"
          // value={'isName' || ''}
          // onChange={''}
          type="text"
          placeholder="Пароль"
          required
        />

        <button className="popup__btn-save authorization__button" type="submit">Зарегистрироваться</button>
        <Link to="/sign-in">Уже зарегистрированы? Войти</Link>
      </form>

    </section>
  )
}

export default Register;