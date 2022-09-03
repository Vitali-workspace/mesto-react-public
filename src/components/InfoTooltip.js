
function InfoTooltip(props) {

  // {props.title}
  // popup__container_type_tooltip
  // {props.statusAuth ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
  return (
    <section
      className={`popup popup_type_${props.name} popup_overlay 
    ${props.isOpen ? 'popup_opened' : false} aria-label="всплывающее окно"`}>
      <div className="popup__container popup__container_type_tooltip">
        <div className="popup__icon-status"></div>
        <h2 className="popup__edit-header">Вы успешно зарегистрировались!</h2>
        <button
          className={`popup__btn-close popup__btn-close_type_position-tooltip`}
          type="button"
          onClick={props.onClose} />
      </div>
    </section>
  )
}

export default InfoTooltip;