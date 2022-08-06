
import React from 'react';
import photo from '../images/image-prof.png';
import api from '../utils/Api.js';
import Card from './Card.js';
//style={{ backgroundImage: `url(${userAvatar})` }}

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);


  React.useState(() => {
    api.getProfileInfo()
      .then((profileInfo) => {
        setUserName(profileInfo.name);
        setUserDescription(profileInfo.about);
        setUserAvatar(profileInfo.avatar);
      }).catch(err => console.log(err))
  }, []);

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
          <button className="profile__edit-icon" onClick={props.onEditAvatar}></button>
          <img className="profile__photo" src={photo} alt="фото профиля" />
        </div>
        <h1 className="profile__name">{userName}</h1>
        <p className="profile__description">{userDescription}</p>
        <button className="profile__btn-edit" type="button" onClick={props.onEditProfile}></button>
        <button className="profile__btn-add" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="gallery" aria-label="галерея">
        {cards.map((elementCard, index) => (
          <Card key={elementCard.index} card={elementCard} />)
        )}
      </section>
    </main>
  )
}

export default Main;