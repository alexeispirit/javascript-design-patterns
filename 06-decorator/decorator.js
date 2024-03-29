class Car {
  constructor() {
    this.price = 10000;
    this.model = "Car";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class TeslaCar extends Car {
  constructor() {
    super();
    this.price = 25000;
    this.model = "Tesla";
  }
}

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

// Version with Autopilot and Parktronic
let tesla1 = new TeslaCar();
tesla1 = new Autopilot(tesla1);
tesla1 = new Parktronic(tesla1);

console.log(tesla1.getPrice(), tesla1.getDescription());
// 33000 "Tesla with autopilot with parktronic"

// Version with Autopilot only
let tesla2 = new TeslaCar();
tesla2 = new Autopilot(tesla2);

console.log(tesla2.getPrice(), tesla2.getDescription());
// 30000 "Tesla with autopilot"
