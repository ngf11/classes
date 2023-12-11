//Parent class super class
// class Pizza {
//   constructor(pizzaSize) {
//     this._size = pizzaSize;
//     this._crust = "Orinal";
//   }
//   get pizzaCrust() {
//     return this._crust;
//   }

//   set pizzaCrust(val) {
//     this._crust = val;
//   }
// }

//Factory funtion
function pizzaFuctory(size) {
  const pizzaCrust = "Orginal";
  const pizzaSize = size;
  return {
    bake: () => {
      console.log(`Your order ${pizzaSize}, ${pizzaCrust} pizza`);
    },
  };
}

const myPizza = pizzaFuctory("Large");
myPizza.bake();
