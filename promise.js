let calculationPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1 + 1);
  }, 1000);
});

let calculationPromise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1 + 2);
  }, 500);
});

let calculationPromise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1 + 3);
  }, 500);
});

function printFinalValue(nextValue) {
  console.log('the answer is ', nextValue);
}

function addTwo(value) {
  return value + 2;
}

let addThree = value => value + 3;
let addFour = (value) => {
  return value + 4;
};

calculationPromise
  .then(addTwo)
  .then(addTwo)
  .then(printFinalValue);

calculationPromise2
  .then(addTwo)
  .then(addTwo)
  .then(printFinalValue);

calculationPromise3       // 3
  .then(addThree)         // 3+3 =6
  .then(addFour)          // 6+4 = 20
  .then(printFinalValue);

