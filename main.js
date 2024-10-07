const button = document.querySelector('.button');
const picture = document.querySelector('.photo');
button.addEventListener('click', () => {
    let randomNum =Math.floor(Math.random() * 9) + 1;
    let pictureActiveNumber = +picture.src.slice(picture.src.length - 5, picture.src.length -4);
    if (randomNum === pictureActiveNumber) {
        if (randomNum === 1)
        {randomNum +=1;picture.src = `./image/${randomNum}.jpg`;}
        else if (randomNum === 9)
        {randomNum -=1;picture.src = `./image/${randomNum}.jpg`;}
        else
        {randomNum =Math.floor(Math.random() * 9) + 1;
            picture.src = `./image/${randomNum}.jpg`;}

    }else {console.log(22333);
        picture.src = `./image/${randomNum}.jpg`;}

})