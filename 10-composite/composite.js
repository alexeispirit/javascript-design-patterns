class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName("Engine");
    this.setPrice(8000);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(3000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName("Tools");
    this.setPrice(4000);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipment = [];
  }

  add(equipment) {
    this.equipment.push(equipment);
  }

  getPrice() {
    return this.equipment.reduce(
      (total, current) => total + current.getPrice(),
      0
    );
    // .map(equipment => equipment.getPrice())
    // .reduce((total, current) => total + current);
  }
}

class Car extends Composite {
  constructor() {
    super();
    this.setName("Audi");
  }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is $${myCar.getPrice()}`);
