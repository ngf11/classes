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
  get order() {
    console.log(`Your order is ${this.size}, ${this.crust} curst pizza. `);
  }
}

const myPizza = new Pizza("Large");
myPizza.pizzaCrust = "Thin";
myPizza.order;
