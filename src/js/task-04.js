const buttonDec = document.querySelector('button[data-action="decrement"]');
console.log(buttonDec);
const buttonInc = document.querySelector('button[data-action="increment"]');
console.log(buttonInc);
const number = document.querySelector('#value');
console.log(number);
let counterValue = 0;
buttonDec.addEventListener('click', function (){
    counterValue -=1;
    number.textContent = counterValue;
});
buttonInc.addEventListener('click', function(){
    counterValue += 1;
    number.textContent = counterValue;
});