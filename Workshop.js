class Vehicle {
  constructor(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  move() {
    return 'The vehicle is moving';
  }
}

class Car extends Vehicle {
  #fuel;
  constructor(brand, model, year, color, fuel = 0) {
    super(brand, model, year, color);
    this.#fuel = fuel;
  }

  getFuel() {
    return this.#fuel;
  }

  setFuel(fuel) {
    this.#fuel = fuel;
  }

  addFuel(fuel) {
    const gaz = this.getFuel();

    if (gaz + fuel <= 100) {
      this.setFuel(gaz + fuel);
    }
  }

  move() {
    if (this.getFuel() > 0) {
      return 'The car is moving';
    }

    if (this.getFuel() === 0) {
      return 'Please, refuel the car';
    }
  }
}

class Bike extends Vehicle {
  constructor(brand, model, year, color) {
    super(brand, model, year, color);
  }

  move() {
    return 'The bike is moving';
  }
}

const superCar = new Car('Lamborghini', 'Aventador', 2020, 'Yellow');

const superBike = new Bike('Yahama', 'R1', 2018, 'Blue');

superCar.addFuel(100);

console.log(superCar.getFuel());
