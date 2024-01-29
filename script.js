class Pizza {
  constructor(size, topping) {
    this.size = size;
    this.topping = topping;
    this.crust = "Orignal";
  }
  getPizza() {
    console.log(
      `You order a ${this.size}, ${this.topping} pizza with ${this.crust} crust`
    );
  }
  setCrust(value) {
    this.crust = value;
  }
}

const myPie = new Pizza("Large", "Pepperoni");
console.log(myPie.getPizza());
myPie.setCrust("Thin");
console.log(myPie.getPizza());
