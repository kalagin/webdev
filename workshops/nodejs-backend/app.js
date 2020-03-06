document.querySelector(".registration-form").onsubmit = function(event) {
  event.preventDefault();
  const username = event.target.querySelector('input[name="username"]').value;
  const email = event.target.querySelector('input[name="email"]').value;
  console.log("submit", username, email);

  // TODO: сделайте POST запрос на ваш сервер для сохранения пользователя
  // пример маршрута POST /user
};

window.onload = function() {
  // TODO: GET запрос (GET /users)
  // полученные данные выведите в DOM (.user-list)
};
