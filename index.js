let inputs = document.querySelectorAll('input[type = number]');
let subBtn = document.querySelector('button[type = submit]');
let resBtn = document.querySelector('button[type = reset]');
let percent = document.getElementById('percent');
let res = document.getElementById('result').lastElementChild.previousElementSibling;
let message = document.getElementById('result').lastElementChild;


subBtn.addEventListener('click', resultSum);

let sum = 0;
let average = 0;
let inVal = '';

function resultSum() {
    
    
    for (let i = 0; i < inputs.length; i++){
        let inVal = Number(inputs[i].value);
        sum += inVal;
    }
    average = Math.floor(sum / inputs.length);
    document.getElementById('percent').innerHTML = `${average}`;
    
    if (average === 0) {
        res.innerHTML = 'oooooops!'
        message.innerHTML = 'please field all inputs!'
    }

    if (average < 30) {
        res.innerHTML = 'keep practicing';
        message.innerHTML = 'You scored lower than 40% of people';
    }

    if (average >= 30 && average < 50) {
        res.innerHTML = 'you are getting there';
        message.innerHTML =' You scored higher than 20%';
    }

    if (average < 70 && average >= 50) {
         res.innerHTML = 'solid result';
        message.innerHTML ='You scored higher than 65% of people!';
    }

    if (average < 90 && average >= 70) {
        res.innerHTML = 'Great job!';
        message.innerHTML ='you outperformed 80% of test takers!';
    }

    if (average >= 90 && average <= 100) {
        res.innerHTML = 'Excellent!';
        message.innerHTML ='You are among the top performers!';
    }

    if (average > 100) {
        document.getElementById('percent').innerHTML = '100';
        res.innerHTML = 'Excellent!';
        message.innerHTML ='You are among the top performers!';
    }
    return average;
}


resBtn.addEventListener('click', reset);

function reset() {
    percent.innerHTML = '';
    res.innerHTML = '';
    message.innerHTML = '';
     for (let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}
