var obj = {
  name: 'Quoc Khanh',
  printName: function () {
    console.log(`My name is ${this.name}`);
  }
}

obj.printName();
setTimeout(obj.printName.bind({name: 'Sung'}), 1000);
