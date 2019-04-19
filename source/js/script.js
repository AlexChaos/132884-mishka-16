var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navClosed = document.querySelector('.main-nav__toggle--closed');
var navOpened = document.querySelector('.main-nav__toggle--opened');
var openModal = document.querySelectorAll('.open-modal');
var closeModal = document.querySelector('.modal__basket-btn');
var popup = document.querySelector('.modal');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (navToggle.classList.contains('main-nav__toggle--closed')) {
      navToggle.classList.remove('main-nav__toggle--closed');
      navToggle.classList.add('main-nav__toggle--opened');
    } else {
      navToggle.classList.add('main-nav__toggle--closed');
      navToggle.classList.remove('main-nav__toggle--opened');
    }
  });

  navToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  for (var i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add('modal-show');
    });
  }

  closeModal.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
  });
