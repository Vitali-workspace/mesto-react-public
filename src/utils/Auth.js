const BASE_URL = 'https://auth.nomoreparties.co';

function checkError(res) {
  if (!res.ok) {
    return Promise.reject(`произошла ошибка: ${res.status}`);
  }
  return res.json();
}


export function register(email, password) {
  fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  }).then(res => checkError(res));

}

export function authorize(email, password) {
  fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  }).then(res => checkError(res));
}

export function getToken(token) {
  // Проверка токена
  //! Вставить Токен
  fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "Content-Type": "application/json",
      "Authorization": `Bearer {JWT}`
    })
  }).then(res => checkError(res));
}