class Engine2 {
  simpleInterface() {
    console.log("Engine 2.0");
  }
}

class EngineV8 {
  complicatedInterface() {
    console.log("Engine V8!");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complicatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

// Engine 2.0
const car2 = new Auto();
const oldEngine = new Engine2();

car2.startEngine(oldEngine);

// Engine V8 with adapter
const carV8 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

carV8.startEngine(engineAdapter);
