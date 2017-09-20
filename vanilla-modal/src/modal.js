let buttons = document.querySelectorAll('[data-modal-btn]'),
    modals = document.querySelectorAll('[data-modal]');

    //Open modal window
    buttons.forEach((btn) => {
        btn.onclick = function(event) {
            let target = event.target;
            let modalID = target.dataset.modalBtn;

            modals.forEach((modal) => {
                if (modalID == modal.dataset.modal) {
                    modal.classList.add('open');
                }
            });
        }
    });

    // Close modal window on click Close icon
    modals.forEach((modal) => {
        let close = modal.querySelectorAll('.modal__close')[0];
        console.log(close);
            close.onclick = function () {
                modal.classList.remove('open');
            }
    });

// Close modal window on click outside
window.onclick = function(event) {
    modals.forEach((modal) => {
        if (event.target == modal) {
            modal.classList.remove('open');
        }
    });
}
