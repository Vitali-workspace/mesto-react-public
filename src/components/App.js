function App() {
  return (
    <div className="App">

      <div className="root">
        <div className="root__content">

          <div id="popupEdit" className="popup popup_close popup_overlay">
            <div className="popup__container">
              <h2 className="popup__edit-header">Редактировать профиль</h2>
              <form className="form" id="formEdit" name="form-edit" novalidate>
                <section className="form__section" aria-label="имя">
                  <input className="popup__edit-input" id="inputEditName" name="formName" form="formEdit" type="text"
                    placeholder="Имя" minlength="2" maxlength="40" required />
                  <span id="inputEditName-error" className="popup__input-error">Вы пропустили это поле.</span>
                </section>
                <section className="form__section" aria-label="описание деятельности">
                  <input className="popup__edit-input" id="inputEditText" name="formText" form="formEdit" type="text"
                    placeholder="О себе" minlength="2" maxlength="200" required />
                  <span id="inputEditText-error" className="popup__input-error">Вы пропустили это поле.</span>
                </section>
                <button className="popup__btn-save" type="submit">Сохранить</button>
              </form>
              <button className="popup__btn-close" type="button"></button>
            </div>
          </div>

          <div id="popupAddCard" className="popup popup_close popup_overlay">
            <div className="popup__container">
              <h2 className="popup__edit-header">Новое место</h2>
              <form className="form" id="formAdd" name="form-add" novalidate>
                <section className="form__section" aria-label="название места">
                  <input className="popup__edit-input" id="inputAddName" name="formName" form="formAdd" type="text"
                    placeholder="Название" minlength="2" maxlength="30" required />
                  <span id="inputAddName-error" className="popup__input-error">Вы пропустили это поле.</span>
                </section>
                <section className="form__section" aria-label="ссылка на картинку">
                  <input className="popup__edit-input" id="inputAddLink" name="formText" form="formAdd" type="url"
                    placeholder="Ссылка на картинку" required />
                  <span id="inputAddLink-error" className="popup__input-error">Введите адрес сайта.</span>
                </section>
                <button className="popup__btn-save" type="submit">Создать</button>
              </form>
              <button className="popup__btn-close" type="button"></button>
            </div>
          </div>

          <div id="popupCardImg" className="popup popup_close popup_overlay">
            <figure className="popup__container-image">
              <button className="popup__btn-close popup__btn-close_type_position" type="button"></button>
              <img className="popup__image" src="#" alt="#" />
              <figcaption className="popup__image-name"></figcaption>
            </figure>
          </div>
        </div>


        <div id="popupDeleteCard" className="popup popup_close popup_overlay">
          <div className="popup__container">
            <h2 className="popup__edit-header">Вы уверены?</h2>
            <form className="form" id="formDeleteCard">
              <button className="popup__btn-save popup__btn-save_type_position-confirm" type="submit">Да</button>
            </form>
            <button className="popup__btn-close popup__btn-close_type_position-confirm" type="button"></button>
          </div>
        </div>

        <div id="popupAvatar" className="popup popup_close popup_overlay">
          <div className="popup__container">
            <h2 className="popup__edit-header">Обновить аватар</h2>
            <form className="form" id="formAddAvatar" name="form-addAvatar" novalidate>
              <section className="form__section" aria-label="ссылка на картинку">
                <input className="popup__edit-input" id="inputAddLinkAvatar" name="formText" form="formAddAvatar" type="url"
                  placeholder="Ссылка на картинку" required />
                <span id="inputAddLinkAvatar-error" className="popup__input-error">Введите адрес.</span>
              </section>
              <button className="popup__btn-save popup__btn-save_type_position-avatar" type="submit">Сохранить</button>
            </form>
            <button className="popup__btn-close popup__btn-close_type_position-avatar" type="button"></button>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;

