class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  intro() {
    return `Hi my name is ${this.name}, I Am ${this.age} years old`;
  }
}

const nico = new Person("nico", 34);
console.log(nico.intro());
console.log(Person.prototype);
console.log("-----");
console.log(typeof Person);
console.log("-----");
console.log(Person === Person.prototype.constructor);
console.log("-----");
console.log(Person.prototype.sayHi);
console.log("-----");
console.log(Object.getOwnPropertyNames(Person.prototype));
