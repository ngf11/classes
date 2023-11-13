const person = {
  name: "nico",
  skill: "Web Developer",
  hobbies: ["Learning", "reading"],
  get headlines() {
    return `${this.name}  is ${this.skill} and his main hobbies are ${this.hobbies[0]} and ${this.hobbies[1]}`;
  },
  set newHobby(val) {
    this.hobbies.unshift(val);
  },
  get newHobby() {
    return this.hobbies[0];
  },
};
person.newHobby = "Druming";
console.log(person.headlines);
