function PopupWithForm(props) {
  //! в пропсах будет. id classOpen header _form SubName CloseBtn
  return (
    <section id="popupEdit" className="popup popup_close popup_overlay" aria-label="всплывающее окно">
      <div className="popup__container">
        <h2 className="popup__edit-header">Редактировать профиль</h2>
        <form className="form" id="formEdit" name="form-edit" noValidate>
          {/* тут будет пропс children */}
          <button className="popup__btn-save" type="submit">Сохранить</button>
        </form>
        <button className="popup__btn-close" type="button"></button>
      </div>
    </section>
  )
}

export default PopupWithForm;