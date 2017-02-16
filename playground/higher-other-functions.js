// function one (name, location) {
//   console.log(name, location);
// }
//
// function two () {
//   console.log('Args', arguments);
//   one.apply(undefined, arguments);
// }
//
// two('Quoc Khanh', 'Ho Chi Minh City');

var add = (a, b) => a + b;

var square = (a) => a * a;

var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
    console.log('Result is ' + res);
    return res;
  }
};

console.log(add(12, 23));

var addAndLog = callAndLog(add);

var squareAndLog = callAndLog(square);

addAndLog(44, -3);
squareAndLog(3);
