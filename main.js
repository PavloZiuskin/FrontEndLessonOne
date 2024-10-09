
const parentButton = document.querySelector('.button__div');

parentButton.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON'){
        alert(`Your chose was: ${e.target.innerText}`);
    }
})

