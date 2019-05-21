function modal() {

    let overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btns = document.querySelectorAll('.description-btn, .more');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            btns[i].classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    };
};

module.exports = modal;