class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = crustType;
    this.toppings = [];
  }
  get pizzaCrust() {
    return this.crust;
  }

  set pizzaCrust(val) {
    this.crust = val;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(val) {
    this.toppings.push(val);
  }
  bake() {
    console.log(`Baking ${this.size} ${this.type} ${this.crust} crust pizza`);
  }
}

const myPizza = new Pizza("Pepperoni", "Large", "Thin");
myPizza.pizzaCrust = "THicc";
myPizza.bake();
