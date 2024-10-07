const button = document.querySelector('.button');
const allText = document.querySelector('#allText');
button.addEventListener('click', () => {
    allText.classList.toggle('myText');
    allText.classList.toggle('myText__changeColor');
})