class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `Hi ${this.name} , your age is ${this.age}, your gender is ${this.gender} and nationality is ${this.nationality}`;
  }
}

let mihir = new Person("mihir", 22, "male", "indian");
let mansi = new Person("mansi", 24, "female", "indian");
let manohar = new Person("manohar", 55, "male", "indian");

console.log(mihir.introduce());
console.log(mansi.introduce());

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return ` My fav Subject is: ${this.subject}`;
  }
}

let laxmi = new Student("laxmi", 49, "female", "indian", "Maths");
console.log(laxmi.introduce(), laxmi.study());
