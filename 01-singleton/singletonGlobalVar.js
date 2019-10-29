let instance;

class Counter {
  constructor() {
    if (!instance) instance = this;
    instance.count = 0;
    return instance;
  }

  getCount() {
    return instance.count;
  }

  increaseCount() {
    return instance.count++;
  }
}

const count1 = new Counter();
const count2 = new Counter();

count1.increaseCount();
count1.increaseCount();
count2.increaseCount();
count2.increaseCount();

count1.getCount(); // 4
count2.getCount(); // 4
