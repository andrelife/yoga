function modal() {
    let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    content = document.querySelector('.content');
function showDescriptionBtn(){
    content.addEventListener('click', function(event){
        if(event.target && event.target.matches('.description-btn')) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });
}
showDescriptionBtn();
function moreCloseBtn(){
    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.add('more-splash');
        document.body.style.overflow = '';
    });
}
moreCloseBtn();
}
module.exports = modal;