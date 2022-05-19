
const { stdin, stdout } = require('process');
const readInput = require('readline');

const reader = readInput.createInterface({

    // it's okay if this part is magic; it just says that we want to
    // 1. output the prompt to the standard output (console)
    // 2. read input from the standard input (again, console)
    input: process.stdin,
    output: process.stdout
});


class AddNumbers {
  

}



AddNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
