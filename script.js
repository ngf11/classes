const person = {
  name: "Nico",
  skill: "Developer",
  interest: ["fitness", "3D Animation"],
  get intro() {
    console.log(
      `Hi, my name is ${this.name}. I am a ${this.skill}. My interest are: ${this.interest}`
    );
  },
  set setInterest(val) {
    this.interest.unshift(val);
  },
  set newName(val) {
    this.name = val;
  },
  set setSkill(val) {
    this.skill = val;
  },
};
person.newName = "DiDi Wu";
person.setSkill = "Astronaut";
person.setInterest = "Space travel";
person.setInterest = "Playing Futbol";
person.intro;
