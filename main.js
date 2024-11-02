// Початковий час у секундах
let startTime = 85; // Змінюйте цю змінну для встановлення часу (наприклад, 85 секунд = 1 хвилина 25 секунд)

function startTimer(duration) {
    let timer = duration;
    const display = document.getElementById('timer');

    const interval = setInterval(() => {
        // Обчислення хвилин та секунд
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        // Форматування у вигляді мм:сс
        display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Завершення таймера
        if (timer <= 0) {
            clearInterval(interval);
            display.textContent = "00:00";
        } else {
            timer--;
        }
    }, 1000);
}

// Запуск таймера
startTimer(startTime);
