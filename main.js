const enteredButton = document.querySelector('.button__add_link');
const redirectionButton = document.querySelector('.button__redirect');
let redirectionLink = '';

enteredButton.addEventListener('click', e => {
    redirectionLink = prompt("Please enter a valid URL");
    redirectionButton.setAttribute('href', redirectionLink);
})
redirectionButton.addEventListener('click', () => {
    location.assign(redirectionLink)
})