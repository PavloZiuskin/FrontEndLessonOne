const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend'))); // Статичні файли
app.use(express.json());

let cars = [];

app.get('/api/cars', (req, res) => {
    res.json(cars);
});

app.post('/api/cars', (req, res) => {
    const { brand, model, year } = req.body;
    const newCar = { id: Date.now(), brand, model, year };
    cars.push(newCar);
    res.status(201).json(newCar);
});

app.put('/api/cars/:id', (req, res) => {
    const { id } = req.params;
    const { brand, model, year } = req.body;
    const car = cars.find(car => car.id == id);
    if (car) {
        car.brand = brand;
        car.model = model;
        car.year = year;
        res.json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
});

app.delete('/api/cars/:id', (req, res) => {
    cars = cars.filter(car => car.id != req.params.id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
