/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 * Basically how to shorted code - JK
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    //Code Block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);
// node arrow-functions.js in terminal to run code.


// Arrow Function With Parameters - change function to const & add =>
const addTwoNumbers1 = (a, b) => {
    //Code Block
    return a + b;
}
let sum1 = addTwoNumbers1(4, 5);
console.log(sum1);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(5, 5);
console.log(sum2);


// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there!!!");

const sayHello = () => console.log("hello")
sayHello()

// Returning Multiple Lines - needs "" JK
const returnMultipleLines = () => (
    "<p>
    This is a multiline string!
    </p>"
)
console.log(returnMultipleLines());

