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
