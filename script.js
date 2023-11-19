class Person {
  constructor(name, skill, hobbies) {
    this.name = name;
    this.skill = skill;
    this.hobbies = hobbies;
  }
  get intro() {
    return `hi my name is ${this.name}. I am ${this.skill}, I am interested in ${this.primeryInterest}`;
  }
  set name(val) {
    this._name = val;
  }

  get name() {
    return this._name.toUpperCase();
  }
}

const nico = new Person("nico", "Developer", ["Fitness", "Tech"]);

console.log(nico.intro);
