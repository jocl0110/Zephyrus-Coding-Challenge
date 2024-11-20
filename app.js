// Task 1 Reverse String (JavaScript);
function ReverseString(string) {
  if (typeof string !== "string" || string.length === 0) {
    return "Please provide a valid string";
  } else {
    const charArr = string.split(""); //Convert string to array of characters
    charArr.reverse(); //Reverse the array
    return charArr.join(""); //Join the array back into a string
    // or return string.split("").reverse().join("");
  }
}

console.log(ReverseString("hello")); // Output: "hello"

// Task 2: FizzBuzz (JavaScript)
function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // Divisible by both 3 and 5
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // Divisible by 3 only
      console.log("Fizz");
    } else if (i % 5 === 0) {
      //Divisible by 5 only
      console.log("Buzz");
    } else {
      console.log(i); //Not divisible by either
    }
  }
}

FizzBuzz();

// Task 3: Even or Odd(JavaScript)
function EvenChecker(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Please provide a valid number";
  }
  if (num % 2 === 0) {
    return `The number ${num} is even`; //Even number case
  } else {
    return `The number ${num} is odd`; //Odd number case
  }
}

EvenChecker(10);
