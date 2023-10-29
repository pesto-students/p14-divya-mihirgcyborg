// <!--this function will take input as array and then divide it into array of even numbers and array of odd number
// then sort it and display on console-->

let divideArray = function (nums) {
  let evenNums = [];
  let oddNums = [];

  nums.forEach((num) => {
    if (num % 2 == 0) evenNums.push(num);
    else oddNums.push(num);
  });
  console.log(evenNums.sort());
  console.log(oddNums.sort());
};
