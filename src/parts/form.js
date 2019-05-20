function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...' 
    };
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input')[0],
        statusMessage = document.createElement('div'),
        formTelEmail = document.getElementById('form'),
        input1 = formTelEmail.getElementsByTagName('input')[0],
        input2 = formTelEmail.getElementsByTagName('input')[1];
        
        input1.name = 'email';
        input2.name = 'phone';
    
        statusMessage.classList.add('status');
    
            input2.onkeypress = function(event){
                if (event.keyCode != 43) {
                    if(event.keyCode < 48 || event.keyCode > 57){
                event.preventDefault();
                    }
                }
            };
            input.onkeypress = function(event){
                if (event.keyCode != 43) {
                    if(event.keyCode < 48 || event.keyCode > 57){
                event.preventDefault();
                    }
                }
            };
}
module.exports = form;