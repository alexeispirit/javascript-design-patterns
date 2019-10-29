class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const collection = new Iterator(["Audi", "BWM", "Tesla", "Merseder"]);

while (collection.hasNext()) {
  console.log(collection.next());
}
