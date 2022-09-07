const BASE_URL = 'https://auth.nomoreparties.co';

const checkError = (res) => {
  if (!res.ok) {
    return Promise.reject(`произошла ошибка: ${res.status}`);
  }
  return res.json();
}


const register = () => { }

const authorize = () => { }

const token = () => { }