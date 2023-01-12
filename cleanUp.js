// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log(`Hello, what is your name?`);
}

nameQuestion();
// replaced "" with ``
// added ;'s to keep it consistant with the rest of the code below

// EX 2:
function addThreeNums(first, second, third) {
    var sum = first + second + third
    console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// indented the code in the code block
// moved the final curly bracket all the way to the left
// added ;'s to keep it consistent with the rest of the code

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// fixed `func` to `function` in order for it to be recognized as a function

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}`)
  }

  average(25, 46)

  //removed the period from the console.log argument, because it caused an error
  // added call, otherwise nothing would print
  