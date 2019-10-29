// Abstract factory
function bwmProducer(kind) {
  return kind === "sport" ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a Sport car!";
  }
}

class I3 {
  info() {
    return "i3 is a Family car!";
  }
}

// Initializing Abstract factory of sport cars
const produce = bmwProducer("sport");

// Car producing (Factory)
const myCar = new produce();

myCar.info(); // "Z4 is a Sport car!"
