// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and assign it the value 'Dane' as a string.
// We then check to see if the name variable is equal to 'Mary'.
// If the name is equal to 'Mary', we console.log 'Hi, Mary!'
//If the name is not equal to 'Mary', we console.log 'How do you do?'. It is not equal, so we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//We creat a variable called secret and do not assign it a value. We also create a variable called code and assign it the number 123.
//We then check if code equals 123. Since the code equals 123, the string 'super' is assigned to the variable, secret, and the value of code is multiplied by two, resulting in code = 246.
//We then check to see if code is greater than 250. If it is greater than 250, the string 'duper' is assigned to the variable, secret. It is not greater than 250.
//Since code is not greater than 250, we console.log(secret) and should see an output of 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//We create three different variables: one called isStudent and assign it a boolean value of true; another called age and assign it a number value of 34; and zip and assign it a number value of 55407.
//We check if isStudent is equal to true AND if zip is greater than 80000. If both statements are correct, we console.log 'You're a student on the West Coast!'. isStudent is true but zip is not greater than 80000.
//We then check to see if isSudent is equal to false OR the value of age is less than 30. If so, we console.log 'What are your hobbies?'. Both statements are incorrect.
//We finally check if isStudent is equal to true. If it is, we console.log 'Welcome to Prime!'. If not, then we console.log 'How about the weather'. It is, so we console.log 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/* FIX - colorOne should be equal to 'blue' and colorTwo should be equal to 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - Here we should assign colorTwo the string of 'purple' too since the mix === true statement is correct.
  // Should also include colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - We need to use && instead of || because we need BOTH the temp higher than 39 AND the time greater than or equal to 4 in order to console.log 'throw away the food!'. They are so we console.log 'throw away the food!'.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - We are checking if age is GREATER than or EQUAL to minAge so the correct syntax should read if (age >= minAge). We then console.log 'enter'.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
