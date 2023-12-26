const startBtn = document.querySelector('.start-btn');
const firstNum = document.querySelector('.first-num');
const secondNum = document.querySelector('.second-num');
const random1 = document.querySelector('.random1');
const random2 = document.querySelector('.random2');
const random3 = document.querySelector('.random3');
const random4 = document.querySelector('.random4');
const restartBtn = document.querySelector(".restart-btn");

startBtn.addEventListener('click', function() {

    let a = Math.trunc(Math.random() * 100);
    let b = Math.trunc(Math.random() * 100);
    firstNum.textContent = a;
    secondNum.textContent = b;
    let resTrue = a + b;
    let resFalse1 = a + b - 2;
    let resFalse2 = a + b + 2;
    let resFalse3 = a + b + 3;
    let c = Math.trunc(Math.random() * 4);
    if (c == 0) {
        random1.textContent = resTrue;
        random2.textContent = resFalse1;
        random3.textContent = resFalse2;
        random4.textContent = resFalse3;
    } else if (c == 1) {
        random1.textContent = resFalse1;
        random2.textContent = resTrue;
        random3.textContent = resFalse2;
        random4.textContent = resFalse3;
    } else if (c == 2) {
        random1.textContent = resFalse1;
        random2.textContent = resFalse2;
        random3.textContent = resTrue;
        random4.textContent = resFalse3;
    } else if (c == 3) {
        random1.textContent = resFalse1;
        random2.textContent = resFalse3;
        random3.textContent = resFalse2;
        random4.textContent = resTrue;
    }
})
restartBtn.addEventListener("click", function() {
    console.log('bosuldi');
    random1.textContent = '';
    random2.textContent = '';
    random3.textContent = '';
    random4.textContent = '';
    firstNum.textContent = x;
    secondNum.textContent = y;
})