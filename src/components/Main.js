
import React from 'react';
import alternativeAvatar from '../images/image-prof.png';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(alternativeAvatar);
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
          <button className="profile__edit-icon" onClick={props.onEditAvatar} />
          <img className="profile__photo" src={userAvatar} alt="фото профиля" />
        </div>
        <h1 className="profile__name">{userName}</h1>
        <p className="profile__description">{userDescription}</p>
        <button className="profile__btn-edit" type="button" onClick={props.onEditProfile} />
        <button className="profile__btn-add" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="gallery" aria-label="галерея">
        {cards.map((elementCard) => {
          return (<Card key={elementCard._id} card={elementCard} onCardClick={props.onCardClick} />)
        }
        )}
      </section>
    </main>
  )
}

export default Main;