let startTime = 85;

function startTimer(duration) {
    let timer = duration;
    const display = document.getElementById('timer');

    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (timer <= 0) {
            clearInterval(interval);
            display.textContent = "00:00";
        } else {
            timer--;
        }
    }, 1000);
}

startTimer(startTime);
