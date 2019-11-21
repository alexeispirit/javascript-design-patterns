class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronics();
    this.collectAccessories();
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log("Add electronic engine");
  }

  installChassis() {
    console.log("Install Tesla chassis");
  }

  addElectronics() {
    console.log("Add special electronics");
  }

  collectAccessories() {
    console.log("Collect Accessories");
  }
}

class BmwBuilder extends Builder {
  addEngine() {
    console.log("Add BMW engine");
  }

  installChassis() {
    console.log("Install BMW chassis");
  }

  addElectronics() {
    console.log("Add electronics");
  }

  collectAccessories() {
    console.log("Collect Accessories");
  }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();

bmwBuilder.build();
