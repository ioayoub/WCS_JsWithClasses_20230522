class Person {
  #age;
  constructor(name, age, campus, skills) {
    this.name = name;
    this.#age = age;
    this.campus = campus;
    this.skills = skills;
  }

  #joinSkills() {
    return this.skills.join(', ');
  }

  getAge() {
    return this.#age;
  }

  setAge(age) {
    if (age >= 1 && age <= 99) {
      this.#age = age;
    }
  }

  sayHello() {
    //prettier-ignore
    return `Hello I'm ${this.name}, from ${this.campus}. And work with ${this.#joinSkills()}`;
  }
}

class Student extends Person {
  constructor(name, age, campus, skills, isGraduated) {
    super(name, age, campus, skills);
    this.isGraduated = isGraduated;
  }
}

class Trainer extends Person {
  constructor(name, age, campus, skills, startingDate) {
    super(name, age, campus, skills);
    this.startingDate = startingDate;
  }
}

const julie = new Student(
  'Julie',
  30,
  'Berlin',
  ['Python', 'JavaScript'],
  true
);
