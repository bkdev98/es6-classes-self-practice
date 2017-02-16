class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting () {
    return `Hi! I am ${this.name}`;
  }
  getDescription () {
    return `${this.name} is ${this.age} years old`;
  }
  toString () {
    return JSON.stringify(this);
  }
}

class Child extends Person {
  constructor (name, age, like) {
    super(name, age);
    this.like = like;
  }
  getGreeting () {
    return `Hello, I am ${this.name} and I like ${this.like}.`
  }
}

class Baby extends Person {
  getGreeting () {
    return 'Wahhhhhhhhh';
  }
}

var me = new Person('bkdev', 18);
console.log(me.getGreeting());

var anonymous = new Child('sung', 18, 'warn hugs');
console.log(anonymous.getGreeting());

var baby = new Baby();
console.log(baby.getGreeting());
