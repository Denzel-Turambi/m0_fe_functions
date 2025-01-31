// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting(){
    console.log(`Hello, Friend`);
}

printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function printIntroduction(name) {
    console.log(`Hello, my name is ${name}`);
}

printIntroduction("Denzel");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function payRange(company, num1, num2) {
    var sum = num2 - num1
    console.log(`${company}'s pay range is ${sum}`);
}

payRange("Slack", 90000, 110000);

// 4: Write a function that satifies the following interaction pattern:
function quantity(num3, item){
    if (num3 === 0){
        console.log(`${item} - is OUT of stock!`)
    } else if (num3 < 4) {
        console.log(`${item} - running LOW`)
    } else {
        console.log(`${item} is stocked`)
    }
}
quantity(4, "Coffee");
// => "Coffee is stocked"

quantity(3, "Tortillas");
// => "Tortillas - running LOW"

quantity(0, "Cheese");
// => "Cheese - OUT of stock!"

quantity(1, "Salsa");
// => "Salsa - running LOW"