class Account {
  pay(orderPrice) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay using ${this.name}`);
      this.incomer.pay(orderPrice);
    } else {
      console.log("Unfortunately, not enough money");
    }
  }

  canPay(amount) {
    return this.balance >= amount;
  }

  setNext(account) {
    this.incomer = account;
  }

  show() {
    console.log(this);
  }
}

class Master extends Account {
  constructor(balance) {
    super();
    this.name = "MasterCard";
    this.balance = balance;
  }
}

class Paypal extends Account {
  constructor(balance) {
    super();
    this.name = "PayPal";
    this.balance = balance;
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super();
    this.name = "Qiwi";
    this.balance = balance;
  }
}

// Set System balance
const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

// Define chain
master.setNext(paypal);
paypal.setNext(qiwi);

master.show();

// Start payment
master.pay(438);
