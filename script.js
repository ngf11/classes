//Parent class super class
class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "Orinal";
  }
  get pizzaCrust() {
    return this.crust;
  }

  set pizzaCrust(val) {
    this.crust = val;
  }
}

class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = this.type; // "The Works"
  }
  getTypeOfPizza() {
    console.log(this.type);
  }
  setTypeOfPizza(val) {
    this.type = val;
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices `);
  }
}

const myPizza = new SpecialtyPizza("Lagre");
myPizza.setTypeOfPizza("The Works");

myPizza.slice();
