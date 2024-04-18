let number = document.querySelector('.number');

let button1 = document.querySelector('#button1');

let button2 = document.querySelector('#button2');

let button3 = document.querySelector('#button3');

let i = 0;

button1.addEventListener('click', ()=>{
    if(i >= 0 && i <= 9){
        i++
        document.querySelector('.number').innerHTML = i;
    }
})

button2.addEventListener('click', () => {
    i = 0;
    number.innerHTML = i;
})

button3.addEventListener('click', () => {
    if(i >= 1 && i <= 10){
        i--
        document.querySelector('.number').innerHTML = i;
    }
})