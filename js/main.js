// Создаем переменную, в которую положим кнопку МЕНЮ
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим МЕНЮ
let menu = document.querySelector('.sidebar');

// Отслеживаем клик по кнопе МЕНЮ и запускаем функцию
menuToggle.addEventListener('click', function (event) {
// Отменяем стандартное поведение ссылки <a>
  event.preventDefault();
// Вешаем класс на меню, когда кликаем по кнопке МЕНЮ
  menu.classList.toggle('visible');
})
