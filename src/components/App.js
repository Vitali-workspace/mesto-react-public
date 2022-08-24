import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false, item: {} });
  const [isCurrentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);
  //console.log(isCurrentUser); //!===

  React.useState(() => {
    api.getProfileInfo()
      .then((profileInfo) => {
        setCurrentUser(profileInfo)
      }).catch(err => console.log(err))
  }, []);

  React.useState(() => {
    api.getInitialCards()
      .then((cardsInfo) => {
        setCards(cardsInfo)
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


  function handleUpdateUser(userInfo) {
    api.changeProfileInfo(userInfo)
      .then((profileInfo) => {
        setCurrentUser(profileInfo);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(avatarUrl) {
    console.log(avatarUrl);

    api.addAvatarServer(avatarUrl)
      .then((avatarInfo) => {
        setCurrentUser(avatarInfo);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }


  // функция удаления и добавления лайков
  function handleCardLike(card) {
    // проверка на установку лайка на карточку
    console.log(card); //! !isLiked
    const isLiked = card.likes.some(usersCard => usersCard._id === isCurrentUser._id);
    console.log(isLiked);
    api.likeCardServer(card._id, !isLiked)
      .then((newCard) => {
        console.log(newCard);
        setCards((state) => {
          state.map((element) => {
            console.log(element);
            let testCard = element._id === card._id ? newCard : element;
            console.warn(testCard)
            return testCard;
          })
        })
      })
      .catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    api.deleteCardServer(card._id)
      .then(() => {
        const newListCards = cards.filter(elementCard => elementCard._id === card._id ? false : true)

        setCards(newListCards);
        //! закрытие confirm popup
      })
      .catch(err => console.log(err))
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
            stateCards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          {/* Edit */}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />


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
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

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

