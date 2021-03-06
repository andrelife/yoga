function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;
   
    persons.addEventListener('input', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == ''|| persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = place.options[place.selectedIndex].value * total;
        }
    });

    restDays.addEventListener('input', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0){
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = place.options[place.selectedIndex].value * total;
        }
    });

    place.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
    persons.addEventListener('keypress', function (e) {
        this.value = persons.value.replace(/^0/, '');
        if (!/\d/.test(e.key))  {
            e.preventDefault();
        }
    });
    restDays.addEventListener('keypress', function (e) {
        this.value = restDays.value.replace(/^0/, '');
        if (!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
}

module.exports = calc;