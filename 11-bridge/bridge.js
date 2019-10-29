class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}

class SilverColor extends Color {
  constructor() {
    super("Siver-metallic");
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: BMW, Color: ${this.color.get()}`;
  }
}

// We avoid creation of very specific class:
// const blackBmw = new BlackColorBwm();

// Instead
const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint());
