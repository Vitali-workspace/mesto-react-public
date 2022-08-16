import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false, item: {} });
  const [isCurrentUser, setCurrentUser] = React.useState({});

  React.useState(() => {
    api.getProfileInfo()
      .then((profileInfo) => {
        setCurrentUser(profileInfo)
      }).catch(err => console.log(err))
  }, []);

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ isOpen: false, item: {} });
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  // функция для передачи информации о карточке по которой кликнули
  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, item: card });
  }

  return (
    <CurrentUserContext.Provider value={isCurrentUser}>
      <div className="root">
        <div className="root__content">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          {/* Edit */}
          <PopupWithForm
            title='Редактировать профиль'
            name='formEdit'
            btnName='Сохранить'
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
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
            name='formAdd'
            btnName='Создать'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
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
            name='formAddAvatar'
            btnName='Сохранить'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input className="popup__edit-input" id="inputAddLinkAvatar" name="formText" form="formAddAvatar" type="url"
              placeholder="Ссылка на картинку" required />
            <span id="inputAddLinkAvatar-error" className="popup__input-error">Введите адрес.</span>
          </PopupWithForm>


          {/* Delete */}
          <PopupWithForm
            title='Вы уверены?'
            name='formDeleteCard'
            btnName='Да'
            onClose={closeAllPopups}
          />

        </div>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

