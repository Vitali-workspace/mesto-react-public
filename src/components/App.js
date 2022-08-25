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

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false, item: {} });
  const [isCurrentUser, setCurrentUser] = React.useState({});

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
    api.addAvatarServer(avatarUrl)
      .then((avatarInfo) => {
        setCurrentUser(avatarInfo);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(usersCard => usersCard._id === isCurrentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        // получение массива с изменёнными лайками.
        const newCards = cards.map((elementCard) => elementCard._id === card._id ? newCard : elementCard);
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    api.addCardServer(newCard)
      .then((newCardInfo) => {
        setCards([newCardInfo, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCardServer(card._id)
      .then(() => {
        const newListCards = cards.filter((elementCard) => elementCard._id === card._id ? false : true)
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
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

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

