/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up!🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/
//  WAAN IS DIIRIYAY
/*
Task 1 - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher
   
*/
let votingAge = 19;
if (votingAge >= 18) {
  document.getElementById("app").innerHTML = "ture  waad kaweyntahy 18 welcome";
  console.log("ture  waad kaweyntahy 18 welcome");
} else {
  document.getElementById("app").innerHTML = "you're young to view this site";
  console.log("you're young to view this site");
}

/*
Task 2 - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

*/
nameka = "JAAMAC";
lastName = "ABDI";
if (nameka == "JAAMAC" && lastName == "ABDI") {
  nameka = "USTAAD DURAAN";
  lastName = "ALI";
  document.getElementById("app1").innerHTML = `WELCOME ${nameka}`;
  console.log(`welcome ${nameka}`);
  document.getElementById("app2").innerHTML = lastName;
  console.log(lastName);
} else {
  console.log("nooope");
}
/*
Task 3 - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/
let brithDate = "1999";
let newbrithDate = parseFloat(brithDate);
console.log(newbrithDate);
document.getElementById("app3").innerHTML = newbrithDate;
/*
Task 4 - Mood Checker

Do the following:   
   1. Write a script that prompts the user for their current mood. 
   2. If the user inputs happy, print 'Yay me too!' to the console, sad print 'Aw cheer up',
   3. Else just print 'So moody!'

*/

let the_mood = prompt("what is youre mood?");
if (the_mood === "happy") {
  document.getElementById("mood1").innerHTML = "Yay me too!";
  console.log("Yay me too!");
} else if (the_mood === "sad") {
  document.getElementById("mood2").innerHTML = "Aw cheer up!";
  console.log("Aw cheer up!");
} else {
  document.getElementById("mood3").innerHTML = "So moody!";
  console.log("So moody!");
}

/*


Task 5 - Odd or Even

Use conditionals to check if a hardcoded number is odd or even, and then console.log the number is odd or even with the numbers value.

*/

var num = 24; // write a number here

// write your conditions here
if (num % 2) {
  console.log("waa even");
  document.getElementById("num").innerHTML = "waa even";
} else {
  console.log("waa odd");
  document.getElementById("num").innerHTML = "waa odd";
}
/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 FIZZBUZZ 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*

You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. 
It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. 
But you won't be one of those people. Here are the rules for the assignment:

Write a program that prints the numbers from 1 to 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

For numbers which are multiples of both three and five print "FizzBuzz".

The one hint you'll likely need is:

There is a Javascript operator called "remainder" but often referred to as "modulus" or "modulo". 
It is represented by the percentage sign (%) and it gives you the remainder left over after division. So for example:

 6 % 3

Equals zero. Because after dividing 6 by 3, there is zero leftover. Whereas:

6 % 4

Equals 2. Because after dividing 6 by 4, there are 2 left over from the six.

If that was confusing, don't worry. It will make more sense as you use it. 
The point is: the remainder operator is useful for finding out if X is a multiple of Y. If it is, then X % Y will yield zero. 
Knowing this should help you complete this assignment without any issue.


Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". 
You should print this whenever you encounter a number that is prime (divisible only by itself and one).
As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. 
It's okay for it to be slow.


*/

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study next week's content on arrays 
  HINT - try looking up the .includes() method
*/

function vowelCounter(/*add your code here*/) {
  /*add your code here*/
}
