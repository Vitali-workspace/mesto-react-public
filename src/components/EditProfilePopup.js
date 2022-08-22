import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [isName, setName] = React.useState('Жак-Ив Кусто');
  const [isDescription, setDescription] = React.useState('Исследователь океана');



  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='formEdit'
      btnName='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        onChange={setName}
        className="popup__edit-input"
        id="inputEditName"
        name="formName"
        form="formEdit"
        type="text"
        placeholder="Имя"
        //pattern='.{2,40}'
        minLength="2"
        maxLength="40"
        required />
      <span id="inputEditName-error" className="popup__input-error">Вы пропустили это поле.</span>

      <input
        onChange={setDescription}
        className="popup__edit-input"
        id="inputEditText"
        name="formText"
        form="formEdit"
        type="text"
        placeholder="О себе"
        //pattern='.{2,200}'
        minLength="2"
        maxLength="200"
        required />
      <span id="inputEditText-error" className="popup__input-error">Вы пропустили это поле.</span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;