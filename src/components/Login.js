
function Login(props) {


  return (
    <section className="authorization">
      <h2 className="authorization__header">Вход</h2>
      <form
        className="authorization__form"
        onSubmit={props.onSubmit}>
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

        <button className="popup__btn-save authorization__button" type="submit">Войти</button>
      </form>

    </section>
  );

}

export default Login;