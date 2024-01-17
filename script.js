const obj = {
  greet: "Hi",
  name: "nico",
  get fullname() {
    return `${this.greet} ${this.name}`;
  },
  set fullname(name) {
    this.name = name;
  },
};

console.log(obj);
console.log(obj.fullname);
obj.fullname = "Didi";
console.log(obj.fullname);

const user = {
  firstname: "nico",
  lastname: "fuentes",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  set fullname(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
};

console.log(user);
console.log(user.fullname);
user.fullname = "Didi Wu";
console.log(user.fullname);
console.log(user.firstname);
console.log(user.lastname);

const users = {
  firstname: "siggy",
  lastname: "siggy",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  set fullname(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
};

Object.defineProperty(users, "fullname", {
  get() {
    return `${this.firstname} ${this.lastname}`;
  },
  set(value) {
    [this.firstname, this.lastname] = value.split(" ");
  },
});

console.log(users);
console.log(users.fullname);
users.fullname = "Didi Wu";
console.log(users.fullname);
console.log(users.firstname);
console.log(users.lastname);
