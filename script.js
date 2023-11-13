class Person {
  constructor(name) {
    this.name = name;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name.toUpperCaser();
  }
}

const nico = new Person("nico");
// console.log(nico);

console.log(nico);
