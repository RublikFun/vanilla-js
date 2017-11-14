'use strict';

var buttons = document.querySelectorAll('[data-modal-btn]'),
    modals = document.querySelectorAll('[data-modal]');

// Open modal window
buttons.forEach(function (btn) {
  btn.onclick = function (event) {
    var target = event.target;
    var modalID = target.dataset.modalBtn;

    modals.forEach(function (modal) {
      if (modalID == modal.dataset.modal) modal.classList.add('open');
    });
  };
});

// Close modal window on click Close icon
modals.forEach(function (modal) {
  var close = modal.querySelectorAll('.modal__close')[0];

  close.onclick = function () {
    return modal.classList.remove('open');
  };
});

// Close modal window on click outside
window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) modal.classList.remove('open');
  });
};