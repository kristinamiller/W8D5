const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  let number;
  
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  } else {
    reader.question("What's your number?", (res) => {
      number = res;
      sum += parseInt(number);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);

    });
  }

}



addNumbers(1, 3, (sum) => console.log(`Total Sum: ${sum}`));




// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// function addNumbers(sum, numsLeft, completionCallback) {
//   let number;

//   if (numsLeft === 0) {
//     completionCallback(sum);
//   } else {
//     reader.question("What's your number?", function (res) {
//       number = res;
//       sum += parseInt(number);
//       console.log(sum);
//       addNumbers(sum, numsLeft - 1, completionCallback);

//     });
//   }

// }

// const completedCallback = (sum) => {
//   console.log(`Total Sum: ${sum}`);
//   reader.close();
// };


// addNumbers(1, 3, completedCallback);
