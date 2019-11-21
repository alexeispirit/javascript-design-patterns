class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return "Tesla car";
  }
}

class Bmw extends Auto {
  info() {
    return "BMW car";
  }
}

class Audi extends Auto {
  info() {
    return "Audi car";
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) {
    auto.export = console.log(`Exported data: ${auto.info()}`);
  }
  if (auto instanceof Bmw) {
    auto.export = console.log(`Exported data: ${auto.info()}`);
  }
  if (auto instanceof Audi) {
    auto.export = console.log(`Exported data: ${auto.info()}`);
  }
}

const tesla = new Tesla();
const bmw = new Bmw();

console.log(tesla.accept(exportVisitor));

console.log(bmw.accept(exportVisitor));
