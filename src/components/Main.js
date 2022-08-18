
import React from 'react';
import alternativeAvatar from '../images/image-prof.png';
import api from '../utils/Api.js';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // проверка на установку лайка на карточку
    const isLiked = props.card.likes.some(elementCard => elementCard._id === currentUser._id);
    api.likeCardServer(cards._id, !isLiked)
      .then((newCard) => {
        setCards((state) => {
          state.map((element) => {
            return element._id === card._id ? newCard : element
          })
        })
      })
      .catch(err => console.log(err))
  }

  React.useState(() => {
    api.getInitialCards()
      .then((cardsInfo) => {
        setCards(cardsInfo)
      }).catch(err => console.log(err))
  }, []);


  return (
    <main className="page">
      <section className="profile">
        <div className="profile__section-avatar">
          <button className="profile__edit-icon" onClick={props.onEditAvatar} />
          <img className="profile__photo" src={currentUser.avatar} alt="фото профиля" />
        </div>
        <h1 className="profile__name">{currentUser.name}</h1>
        <p className="profile__description">{currentUser.about}</p>
        <button className="profile__btn-edit" type="button" onClick={props.onEditProfile} />
        <button className="profile__btn-add" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="gallery" aria-label="галерея">
        {cards.map((elementCard) => {
          return (
            <Card
              key={elementCard._id}
              card={elementCard}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
            />)
        }
        )}
      </section>
    </main>
  )
}

export default Main;