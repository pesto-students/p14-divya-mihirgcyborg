const generatetransactionId = () => {
  let count = 0;
  return function () {
    let unique_id = `TRANSACTION_ID_${count++}`;
    return Symbol(unique_id);
  };
};
const generateId = generatetransactionId();

const transaction1 = generateId();
console.log(transaction1);
const transaction2 = generateId();
console.log(transaction2);
