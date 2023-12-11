// Parent class super class
class Pizza {
  crust = "Orinal";
  #sauce = "Traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  get pizzaCrust() {
    return this.crust;
  }

  set pizzaCrust(val) {
    this.crust = val;
  }
  order() {
    console.log(
      `Your order ${this.#size}, ${this.crust}, with ${this.#sauce} pizza`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.pizzaCrust = "thin";
myPizza.order();
