// If-else exercise
// 1. Write a js program to find maximum between two numbers.
var input_number1 = prompt("Enter first number");
var input_number2 = prompt("Enter second number");
if (input_number1 > input_number2) {
    console.log(`The larger number is  ${input_number1} `);
}
else {
    console.log(`The larger number is  ${input_number2}`);
}
// 2. Write a js program to find maximum between three numbers.
var input_number1 = prompt("Enter first number");
var input_number2 = prompt("Enter second number");
var input_number3 = prompt("Enter third number");
if (input_number1 > input_number2 && input_number1 > input_number3) {
    console.log(`The larger number is  ${input_number1} `);
} else if (input_number2 > input_number1 && input_number2 > input_number3) {
    console.log(`The larger number is  ${input_number2} `);
} else if (input_number3 > input_number1 && input_number3 > input_number2) {
    console.log(`The larger number is  ${input_number3} `);
}
// 3. Write a js program to check whether a number is negative, positive or zero.
var input_number = prompt("Enter a number");
if (input_number > 0) {
    console.log("The number is positive");
} else if (input_number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.
var input_number = prompt("Enter a number");
if (input_number % 5 == 0 && input_number % 11 == 0) {
    console.log("The number is divisible by 5 and 11");
} else {
    console.log("The number is not divisible by 5 and 11");
}
// 5. Write a js program to check whether a number is even or odd.
var input_number = prompt("Enter a number");
if (input_number % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}
// 6. Write a js program to check whether a year is leap year or not.
var input_year = prompt("Enter a year");
if (input_year % 4 == 0 && input_year % 100 != 0 || input_year % 400 == 0) {
    console.log("The year is leap year");
} else {
    console.log("The year is not leap year");
}
// 7. Write a js program to check whether a character is alphabet or not.
var input_char = prompt("Enter a character");
if (input_char >= 'a' && input_char <= 'z' || input_char >= 'A' && input_char <= 'Z') {
    console.log("The character is alphabet");
} else {
    console.log("The character is not alphabet");
}
// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.
var input_char = prompt("Enter a character");
if (input_char == 'a' || input_char == 'e' || input_char == 'i' || input_char == 'o' || input_char == 'u') {
    console.log("The character is vowel");
} else {
    console.log("The character is consonant");
}
// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
var input_char = prompt("Enter a character alphabet, digit or special character.");
if (input_char >= 'a' && input_char <= 'z' || input_char >= 'A' && input_char <= 'Z') {
    console.log("The character is alphabet");
} else if (input_char >= '0' && input_char <= '9') {
    console.log("The character is digit");
} else {
    console.log("The character is special character");
}
// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
var input_char = prompt("Enter a character uppercase or lowercase alphabet.");
if (input_char >= 'a' && input_char <= 'z') {
    console.log("The character is lowercase alphabet");
} else if (input_char >= 'A' && input_char <= 'Z') {
    console.log("The character is uppercase alphabet");
}
// 11. Write a js program to input week number and print week day.
var input_number = prompt("Enter a week number");
if (input_number == 1) {
    console.log("Monday");
}
else if (input_number == 2) {
    console.log("Tuesday");
}
else if (input_number == 3) {
    console.log("Wednesday");
}
else if (input_number == 4) {
    console.log("Thursday");
}
else if (input_number == 5) {
    console.log("Friday");
}
else if (input_number == 6) {
    console.log("Saturday");
}
else if (input_number == 7) {
    console.log("Sunday");
}
else {
    console.log("Invalid input");
}
// 12. Write a js program to input month number and print number of days in that month.
var input_number = prompt("Enter a month number to check number of days");
if (input_number == 1 || input_number == 3 || input_number == 5 || input_number == 7 || input_number == 8 || input_number == 10 || input_number == 12) {
    console.log("31 days");
} else if (input_number == 4 || input_number == 6 || input_number == 9 || input_number == 11) {
    console.log("30 days");
} else if (input_number == 2) {
    console.log("28 days");
}
// 13. Write a js program to count total number of notes in given amount.
var input_amount = prompt("Enter a amount");
var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var count = 0;
for (var i = 0; i < notes.length; i++) {
    while (input_amount >= notes[i]) {
        input_amount -= notes[i];
        count++;
    }
}
console.log("Total number of notes: " + count);
// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
var input_angle1 = prompt("Enter first angle in degrees under 180 degrees");
var input_angle2 = prompt("Enter second angle in degrees under 180 degrees");
var input_angle3 = prompt("Enter third angle in degrees under 180 degrees");
if (input_angle1 + input_angle2 + input_angle3 == 180) {
    console.log("The triangle is valid");
} else {
    console.log("The triangle is not valid");
}
// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
var input_side1 = prompt("Enter first side of triangle");
var input_side2 = prompt("Enter second side of triangle");
var input_side3 = prompt("Enter third side of triangle");
if (input_side1 == input_side2 && input_side2 == input_side3) {
    console.log("The triangle is equilateral");
} else if (input_side1 == input_side2 || input_side2 == input_side3 || input_side1 == input_side3) {
    console.log("The triangle is isosceles");
} else {
    console.log("The triangle is scalene");
}
// 17. Write a js program to find all roots of a quadratic equation.
var a = prompt("Enter coefficient a");
var b = prompt("Enter coefficient b");
var c = prompt("Enter coefficient c");
var delta = b * b - 4 * a * c;
var root1 = (-b + Math.sqrt(delta)) / (2 * a);
var root2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log("Root 1: " + root1);
console.log("Root 2: " + root2);

// 18. Write a js program to calculate profit or loss.
var cost_price = prompt("Enter cost price");
var selling_price = prompt("Enter selling price");
var profit = selling_price - cost_price;
var loss = cost_price - selling_price;
if (profit > 0) {
    console.log("Profit: " + profit);
} else if (loss > 0) {
    console.log("Loss: " + loss);
} else {
    console.log("No Profit or Loss");
}
//19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// Input marks for five subjects
let physics = parseFloat(prompt("Enter marks for Physics:"));
let chemistry = parseFloat(prompt("Enter marks for Chemistry:"));
let biology = parseFloat(prompt("Enter marks for Biology:"));
let mathematics = parseFloat(prompt("Enter marks for Mathematics:"));
let computer = parseFloat(prompt("Enter marks for Computer:"));
let totalMarks = physics + chemistry + biology + mathematics + computer;
let maxMarks = 500;
let percentage = (totalMarks / maxMarks) * 100;
let grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else if (percentage >= 40) {
    grade = "E";
} else {
    grade = "F";
}
console.log(`Total Marks: ${totalMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);


// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
let units = parseFloat(prompt("Enter the number of units consumed:"));
let bill = 0;
if (units <= 50) {
    bill = units * 0.50;
} else if (units <= 150) {
    bill = (50 * 0.50) + ((units - 50) * 0.75);
} else if (units <= 250) {
    bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
} else {
    bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
}
let surcharge = bill * 0.20;
let totalBill = bill + surcharge;
console.log(`Total Electricity Bill: Rs. ${totalBill.toFixed(2)}`);