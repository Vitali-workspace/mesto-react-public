import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

//import api from '../utils/Api';


function App() {

  function handleEditAvatarClick() {
    console.log('нажат аватар')
  }

  function handleEditProfileClick() {
    console.log('нажато профиль')
  }

  function handleAddPlaceClick() {
    console.log('нажато добавить карточку')
  }


  return (
    <div className="root">
      <div className="root__content">
        <Header />
        <Main
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          handleAddPlaceClick={handleAddPlaceClick}
        />

        <Footer />


        {/* Edit */}
        <PopupWithForm
          title='Редактировать профиль'
          name=''
          btnName=''
        >
          <input className="popup__edit-input" id="inputEditName" name="formName" form="formEdit" type="text"
            placeholder="Имя" minLength="2" maxLength="40" required />
          <span id="inputEditName-error" className="popup__input-error">Вы пропустили это поле.</span>
          <input className="popup__edit-input" id="inputEditText" name="formText" form="formEdit" type="text"
            placeholder="О себе" minLength="2" maxLength="200" required />
          <span id="inputEditText-error" className="popup__input-error">Вы пропустили это поле.</span>
        </PopupWithForm>


        {/* Add */}
        <PopupWithForm
          title='Новое место'
          name=''
          btnName=''
        >
          <input className="popup__edit-input" id="inputAddName" name="formName" form="formAdd" type="text"
            placeholder="Название" minLength="2" maxLength="30" required />
          <span id="inputAddName-error" className="popup__input-error">Вы пропустили это поле.</span>
          <input className="popup__edit-input" id="inputAddLink" name="formText" form="formAdd" type="url"
            placeholder="Ссылка на картинку" required />
          <span id="inputAddLink-error" className="popup__input-error">Введите адрес сайта.</span>
        </PopupWithForm>


        {/* Avatar */}
        <PopupWithForm
          title='Обновить аватар'
          name=''
          btnName=''
        >
          <input className="popup__edit-input" id="inputAddLinkAvatar" name="formText" form="formAddAvatar" type="url"
            placeholder="Ссылка на картинку" required />
          <span id="inputAddLinkAvatar-error" className="popup__input-error">Введите адрес.</span>
        </PopupWithForm>


        {/* Delete */}
        <PopupWithForm
          title='Вы уверены?'
          name=''
          btnName=''
        >
        </PopupWithForm>




        <div id="popupEdit" className="popup popup_close popup_overlay">
          <div className="popup__container">
            <h2 className="popup__edit-header">Редактировать профиль</h2>
            <form className="form" id="formEdit" name="form-edit" noValidate>
              <section className="form__section" aria-label="имя">
                <input className="popup__edit-input" id="inputEditName" name="formName" form="formEdit" type="text"
                  placeholder="Имя" minLength="2" maxLength="40" required />
                <span id="inputEditName-error" className="popup__input-error">Вы пропустили это поле.</span>
              </section>
              <section className="form__section" aria-label="описание деятельности">
                <input className="popup__edit-input" id="inputEditText" name="formText" form="formEdit" type="text"
                  placeholder="О себе" minLength="2" maxLength="200" required />
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
            <form className="form" id="formAdd" name="form-add" noValidate>
              <section className="form__section" aria-label="название места">
                <input className="popup__edit-input" id="inputAddName" name="formName" form="formAdd" type="text"
                  placeholder="Название" minLength="2" maxLength="30" required />
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
          <form className="form" id="formAddAvatar" name="form-addAvatar" noValidate>
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
  );
}

export default App;

