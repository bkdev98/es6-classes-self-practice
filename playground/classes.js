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

var me = new Person('bkdev', 18);
console.log(me.getDescription());

var anonymous = new Person();
console.log(anonymous.getDescription());
