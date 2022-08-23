import React from "react";
import PopupWithForm from "./PopupWithForm";
import alternativeAvatar from '../images/image-prof.png';

function EditAvatarPopup(props) {

  const avatarRef = React.useRef()

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({ avatar: avatarRef });

  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='formAddAvatar'
      btnName='Сохранить'
    // isOpen={isEditAvatarPopupOpen}
    // onClose={closeAllPopups}
    >
      <input
        ref={avatarRef}
        className="popup__edit-input"
        id="inputAddLinkAvatar"
        name="formText"
        //form="formAddAvatar"
        pattern="(www|http:|https:)+[^\s]+[\w]"
        type="url"
        placeholder="Ссылка на картинку"
        required
        onSubmit={handleSubmit}
      />
      <span id="inputAddLinkAvatar-error" className="popup__input-error">Введите адрес.</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;