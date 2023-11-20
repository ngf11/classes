class Pizza {
  constructor(pizzaType, pizzaSize, crustType) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = crustType;
  }
  bake() {
    console.log(`Baking ${this.size} ${this.type} ${this.crust} crust pizza`);
  }
}

const myPizza = new Pizza("Pepperoni", "Large", "Thin");
myPizza.bake();
