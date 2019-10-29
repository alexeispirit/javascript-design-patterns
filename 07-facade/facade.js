class Conveyor {
  setBody() {
    console.log("Body set!");
  }

  getEngine() {
    console.log("Dismantle Engine!");
  }

  setEngine() {
    console.log("Engine set!");
  }

  setInterior() {
    console.log("Interior added!");
  }

  getInterior() {
    console.log("Update interior!");
  }

  setExterior() {
    console.log("Exterior added!");
  }

  setWheels() {
    console.log("Wheels!");
  }

  addElectronics() {
    console.log("Electronics added!");
  }

  paint() {
    console.log("Car painted!");
  }
}

class ConveyorFacade {
  constructor(conveyor) {
    this.conveyor = conveyor;
  }

  assembleCar() {
    this.conveyor.setBody();
    this.conveyor.setEngine();
    this.conveyor.setInterior();
    this.conveyor.setExterior();
    this.conveyor.setWheels();
    this.conveyor.addElectronics();
    this.conveyor.paint();
  }
}

const conveyor = new ConveyorFacade(new Conveyor());

const car = conveyor.assembleCar();
