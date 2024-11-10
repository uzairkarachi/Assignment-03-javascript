// QNO1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
var city=prompt("Entre your city Name");
if(city="karachi"){
    document.write("Welcome to city of lights"+"</br>"+"</br>");
}
// QNO2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
var Gender=prompt("Entre your Gender");
if(Gender=== "male"){
    document.write("<br/>"+"<br/>"+"Good Morning Sir."+"</br>");
}
else {
    document.write("<br/>"+"<br/>"+"Good Morning Ma'am."+"</br>");
}
// QNO3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
var signal = prompt("Entre color of road traffic signal");
if (signal === "red") { document.write("<br/>"+"<br/>"+"Must Stop"); }
else if (signal === "yellow") {
  document.write("<br/>"+"<br/>"+"Ready to move");
}
else if (signal === "green") { document.write("<br/>"+"<br/>"+"Move now"); }
else { document.write("<br/>"+"<br/>"+"wrong color choose"); }
// QNO4. Write a program to take input remaining fuel in car (in 
//  litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
var fuel = prompt("Entre fuel in car litres");
if (fuel < 0.25) { document.write("<br/>" + "Please refill the fuel in your car"+"<br/>"); }
// QNO5. Run this script, & check whether alert message would be
//displayed or not. Record the outputs.
//     a. var a = 4;
//     if (++a === 5){
//     alert("given condition for variable a is true");
//     }
//     User Input & Conditional Statement | JAVASCRIPT
//     Page 2 of 4
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
//     b. var b = 82;
//     if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

//     c. var c = 12;
//     if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
//     d. var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     }
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
//     e. if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//     User Input & Conditional Statement | JAVASCRIPT
//     Page 3 of 4
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// //     f. if("car" < "cat"){
// //     alert("car is smaller than cat");
// //     }
if ("car" < "cat") {
  alert("car is smaller than cat");
}
// QNO6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var subject1Marks = +prompt("Enter marks in subject 1");
var subject2Marks = +prompt("Enter marks in subject 2");
var subject3Marks = +prompt("Enter marks in subject 3");
var totalMarks = +prompt("Enter the total marks");
var percentage = ((subject1Marks + subject2Marks + subject3Marks) / totalMarks) * 100;
if (percentage >= 80) {
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
    document.write("Percentage is: " + percentage + "<br>");
    document.write("Grade is: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
} else if (percentage >= 70) {
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
    document.write("Percentage is: " + percentage + "<br>");
    document.write("Grade is: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
} else if (percentage >= 60) {
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
    document.write("Percentage is: " + percentage + "<br>");
    document.write("Grade is: B" + "<br>");
    document.write("You need to improve" + "<br>");
} else {
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
    document.write("Percentage is: " + percentage + "<br>");
    document.write("Fail" + "<br>");
    document.write("Sorry" + "<br>");
}
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secretnumb=5;
var gussednumb=+prompt("Entre secret number between 1 to 10");
if (gussednumb === secretnumb){document.write("<br/>"+"<br/>"+"Bingo! Correct answer");}
else if (gussednumb+1 === secretnumb){document.write("<br/>"+"<br/>"+"Close enough to the correct answer");}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var x=3
var check=+prompt("Check the number is divisible by 3");
if(check % x=== 0){document.write("<br/>"+"<br/>"+"Number is divisible by 3");}
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var x=2;
var check=+prompt("check the number is divisible by 2");
if (check % x===0){document.write("<br/>"+"<br/>"+"Number is Even"); }
else{document.write("<br/>"+"<br/>"+"Number is Odd");}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temperature = +prompt("Enter temperature");
if (temperature > 40) {
    document.write("<br/>"+"<br/>"+"It is too hot outside");
} else if (temperature > 30) {
    document.write("<br/>"+"<br/>"+"The weather today is normal");
} else if (temperature > 20) {
    document.write("<br/>"+"<br/>"+"Today's weather is cool");
} else if (temperature > 10) {
    document.write("<br/>"+"<br/>"+"OMG! today's weather is so cool");
}
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// var firstNumber = prompt("Enter First Number");
// var secondNumber = prompt("Enter Second Number");
// var operator = prompt("Enter Operator");

// if (operator === '+') {
//     document.write("<br/>"+"<br/>"+firstNumber + secondNumber);
// } else if (operator === "*") {
//     document.write("<br/>"+"<br/>"+firstNumber * secondNumber);
// } else if (operator === "/") {
//     document.write("<br/>"+"<br/>"+firstNumber / secondNumber);
// } else if (operator === "-") {
//     document.write("<br/>"+"<br/>"+firstNumber - secondNumber);
// } else if (operator === "%") {
//     document.write("<br/>"+"<br/>"+firstNumber % secondNumber);
// }

// // QUESTION 11
let firstNumber = +prompt("Enter First Number");
let secondNumber = +prompt("Enter Second Number");
let operator = prompt("Enter Operator");
if (operator === "+") {
    document.write(firstNumber + secondNumber);
} else if (operator === "*") {
    document.write(firstNumber * secondNumber);
} else if (operator === "/") {
    document.write(firstNumber / secondNumber);
} else if (operator === "-") {
    document.write(firstNumber - secondNumber);
} else if (operator === "%") {
    document.write(firstNumber % secondNumber);
}



















