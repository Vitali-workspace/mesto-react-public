import React from 'react';

function ImagePopup(props) {

  return (
    <section id="popupCardImg" className={`popup popup_close popup_overlay 
    ${props.card ? 'popup_opened' : false} aria-label="всплывающее окно с картинкой"`}>
      <figure className="popup__container-image">
        <button className="popup__btn-close popup__btn-close_type_position"
          onClick={props.onClose} type="button" />
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <figcaption className="popup__image-name">{props.card.name}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;