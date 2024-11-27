const API_URL = 'http://localhost:3000/api/cars';

async function fetchCars() {
    try {
        const response = await fetch(API_URL);
        const cars = await response.json();
        if (Array.isArray(cars)) {
            renderCars(cars);
        } else {
            console.error('Response is not an array:', cars);
        }
    } catch (error) {
        console.error('Error fetching cars:', error);
    }
}

async function addCar(brand, model, year) {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ brand, model, year })
        });
        fetchCars(); // Оновити список після додавання
    } catch (error) {
        console.error('Error adding car:', error);
    }
}

async function deleteCar(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchCars(); // Оновити список після видалення
    } catch (error) {
        console.error('Error deleting car:', error);
    }
}

async function updateCar(id, brand, model, year) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ brand, model, year })
        });
        fetchCars(); // Оновити список після оновлення
    } catch (error) {
        console.error('Error updating car:', error);
    }
}

function renderCars(cars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = ''; // Очищуємо список
    cars.forEach(car => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${car.brand} - ${car.model} (${car.year})
            <button onclick="editCar(${car.id})">Edit</button>
            <button onclick="deleteCar(${car.id})">Delete</button>
        `;
        carList.appendChild(li);
    });
}

function editCar(id) {
    const brand = prompt('Enter new brand');
    const model = prompt('Enter new model');
    const year = prompt('Enter new year');
    if (brand && model && year) {
        updateCar(id, brand, model, parseInt(year));
    }
}


document.getElementById('car-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    addCar(brand, model, parseInt(year));
    e.target.reset();
});

fetchCars();
