function calc() { 
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        //options = document.querySelectorAll('option'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        persons.onkeypress = function(event){
                if(event.keyCode < 48 || event.keyCode > 57){
            event.preventDefault();
            }
        };
        restDays.onkeypress = function(event){
                if(event.keyCode < 48 || event.keyCode > 57){
            event.preventDefault();
            }
        };

        totalValue.innerHTML = 0;
        
        persons.addEventListener('change', function(){
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if(persons.value == 0  || restDays.value == 0 || restDays.value == '' || persons.value == ''){
                totalValue.innerHTML = 0;
            } else{
                totalValue.innerHTML = total * place.options[place.selectedIndex].value;
            }
        });
        restDays.addEventListener('change', function(){
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;
            if(restDays.value == 0 || persons.value == 0 || persons.value == '' || restDays.value == ''){
                totalValue.innerHTML = 0;
            } else{
                totalValue.innerHTML = total * place.options[place.selectedIndex].value;
            }
        });
        place.addEventListener('change', function(){
            if(restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });
}
module.exports = calc;