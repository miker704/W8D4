const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function AddNumbers (sum, numsLeft, cb) {
  if (numsLeft > 0) {
    reader.question ('Input number to be added: ', function(number) {
    let newSum = sum + parseInt(number);
    let newNumsLeft = numsLeft - 1;

    cb(newSum);

    AddNumbers(newSum, newNumsLeft, cb)})
    
  } else {
      return cb(sum)

  };
};

function printSum(sum) {
    console.log(`Total Sum: ${sum}`)
}

//array.each do |num|
// AddNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

//old fashion way. Same with the cb above. 
AddNumbers(0, 3, printSum) 
