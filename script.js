const rezolvareBtnTrierii = document.querySelector('.trierii');
const rezolvareBtnGreedy = document.querySelector('.greedy');
const rezolvareBtnBktr = document.querySelector('.bktr');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

rezolvareBtnTrierii.addEventListener('click', () => {
    img1.classList.toggle('close');
})

rezolvareBtnGreedy.addEventListener('click', () => {
    img2.classList.toggle('close');
})

rezolvareBtnBktr.addEventListener('click', () => {
    img3.classList.toggle('close');
})