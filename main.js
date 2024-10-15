document.getElementById('contactForm').addEventListener('submit', (e) =>{
    e.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Ім\'я обов\'язкове';
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Телефон повинен починатися з +380 і містити 9 цифр після';
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Невірний формат email';
        isValid = false;
    }

    if (message.length < 5) {
        document.getElementById('messageError').textContent = 'Повідомлення повинно містити не менше 5 символів';
        isValid = false;
    }

    if (isValid) {
        console.log({
            name: name,
            phone: phone,
            email: email,
            message: message
        });
        alert('Повідомлення надіслано успішно!');
    }
});

