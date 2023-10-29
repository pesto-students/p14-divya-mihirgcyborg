function counter() {
  let count = 0;
  return function innneFun() {
    count++;
    return count;
  };
}
let firstCounter = counter();
let secondCounter = counter();

let firstValues = [];
let secondValues = [];
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
  if (i < 3) secondValues.push(secondCounter());
}
console.log(
  "firstValues array: " + firstValues,
  "secondValues array: " + secondValues
);
