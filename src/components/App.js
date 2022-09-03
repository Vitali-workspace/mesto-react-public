import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup'
import InfoTooltip from './InfoTooltip'
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(false);

  const [isIdCardRemove, setIdCardRemove] = React.useState({});
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = React.useState(false);

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
    setConfirmDeletePopupOpen(false);
    setInfoTooltipPopupOpen(false);
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

  // function handleInfoTooltipClick() {
  //   setInfoTooltipPopupOpen(true);
  // }

  // функция для передачи информации о карточке по которой кликнули
  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, item: card });
  }

  // функция открытия попапа для удаления карточки
  function handleDeleteClick() {
    setConfirmDeletePopupOpen(true)
  }

  // функция сохраняющая id карточки для её удаления
  function сardRemoveId(card) {
    setIdCardRemove(card)
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
    api.deleteCardServer(card)
      .then(() => {
        const newListCards = cards.filter((elementCard) => elementCard._id === card ? false : true)
        setCards(newListCards);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={isCurrentUser}>
      <div className="root">
        <div className="root__content">
          <Header />

          <Switch>
            {/* Regis */}
            <Route path='/sign-up'></Route>

            {/* Login */}
            <Route path='/sign-in'></Route>

            {/* Auth */}
            {/* <Route path='/'></Route> */}

            <Route path='/'>
              <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                stateCards={cards}
                onCardLike={handleCardLike}
                onCardDelete={сardRemoveId}
                onConfirmPopup={handleDeleteClick}
              />
            </Route>
          </Switch>

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
          <ConfirmDeletePopup
            isOpen={isConfirmDeletePopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDelete}
            cardId={isIdCardRemove}
          />

          {/* Оповещение о успешной регистрации */}
          <InfoTooltip
            isOpen={isInfoTooltipPopupOpen}
            onClose={closeAllPopups}
          />

        </div>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

