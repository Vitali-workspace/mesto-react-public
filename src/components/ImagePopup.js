function ImagePopup() {
  return (
    <section id="popupCardImg" className="popup popup_close popup_overlay" aria-label="всплывающее окно с картинкой">
      <figure className="popup__container-image">
        <button className="popup__btn-close popup__btn-close_type_position" type="button"></button>
        <img className="popup__image" src="#" alt="#" />
        <figcaption className="popup__image-name"></figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;