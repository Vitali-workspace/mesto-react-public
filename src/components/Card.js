import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  // проверка id карточки с id моего пользователя.
  const isOwn = props.card.owner._id === currentUser._id;
  const buttonTrashHidden = (
    `gallery__btn-trash ${isOwn ? '' : 'gallery__btn-trash_hidden'}`
  );
  console.log(props.onCardLike);

  const isLiked = props.card.likes.some(elementCard => elementCard._id === currentUser._id);
  const cardLikeButton = !isLiked ? '' : `gallery__btn-favorites_active`;

  //функция с данными карточки для работы попапа ImagePopup
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <article className="gallery__card" >
      <img className="gallery__card-img" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <button className={buttonTrashHidden} />
      <div className="gallery__card-header">
        <h3 className="gallery__card-name">{props.card.name}</h3>
        <div className="gallery__favorites-header">
          <button className={`gallery__btn-favorites ${cardLikeButton}`} onClick={props.onCardLike} type="button" />
          <div className="gallery__counter-favorites">{props.card.likes.length}</div>
        </div>
      </div>
    </article>
  )
}

export default Card;