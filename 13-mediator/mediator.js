class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();

    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomerList(name);
  }

  addToCustomerList(name) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

const mediator = new OfficialDealer();

const customer1 = new Customer("John", mediator);
const customer2 = new Customer("Jill", mediator);

customer1.makeOrder("Tesla", "With autopilot");
customer2.makeOrder("Audi", "With parktronic");

console.log(mediator.getCustomerList());
