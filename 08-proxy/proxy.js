class CarAccess {
  open() {
    console.log("Open car door");
  }

  close() {
    console.log("Close car door");
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Access denied!");
    }
  }

  authenticate(password) {
    return password === "Ilon";
  }

  close() {
    this.door.close();
  }
}

const door = new SecuritySystem(new CarAccess());

door.open("Jack"); // 'Access denied'

door.open("Ilon"); // 'Open car door'

door.close(); // 'Close car door'
