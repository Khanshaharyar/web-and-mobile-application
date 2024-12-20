// Assignment-07
// 1. Light Bulb Experiment
// Objective: Simulate a light bulb's on/off state.
// Task:
// Write a program that asks the user to input either 1 (turn on) or 0 (turn off).
// Use an if condition to print "The light is ON" or "The light is OFF."
// Extension: Add a third option to print "Invalid Input" if the user enters anything other than 1 or 0.
var input_number = prompt("Enter 1 for ON and 0 for OFF");
if (input_number == 1) {    
    console.log("The light is ON");
} else if (input_number == 0) {
    console.log("The light is OFF");
} else {
    console.log("Invalid Input");
}

// 2. Traffic Light Simulator
// Objective: Simulate traffic light behavior.
// Task:
// Accept an input (Red, Yellow, Green) from the user.
// Use if conditions to display:
// "Stop" for Red
// "Slow Down" for Yellow
// "Go" for Green
// Extension: Add a default message for invalid inputs like "Invalid Color."
var input_color = prompt("Enter Red, Yellow or Green");
if (input_color == "red") {
    console.log(" Please Stop the vehicle");
} else if (input_color == "yellow") {
    console.log(" please Slow Down the vehicle");
} else if (input_color == "green") {
    console.log("Go to the destination");
} else {
    console.log("Invalid Color");
}

// 3. Water Temperature Checker
// Objective: Categorize water temperature based on input.
// Task:
// Ask the user to input the temperature in Celsius.
// Use if conditions to print:
// "Freezing" if temperature <= 0
// "Cold" if temperature > 0 and <= 15
// "Warm" if temperature > 15 and <= 30
// "Hot" if temperature > 30
var input_temp = prompt("Enter the temperature in Celsius");
if (input_temp <= 0) {
    console.log("The water is Freezing");
} else if (input_temp > 0 && input_temp <= 15) {
    console.log("The water is Cold");
} else if (input_temp > 15 && input_temp <= 30) {    
    console.log("The water is Warm");
} else if (input_temp > 30) {    
    console.log("The water is Hot");
}

// 4. Rock-Paper-Scissors Game
// Objective: Simulate a simple game.
// Task:
// Accept inputs for two players (rock, paper, or scissors).
// Use if conditions to determine the winner:
// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// Print "Player 1 Wins," "Player 2 Wins," or "It's a Tie!"
var player1 = prompt("Enter Rock, Paper or Scissors");
var player2 = prompt("Enter Rock, Paper or Scissors");
if (player1 == "rock" && player2 == "scissors") {
    console.log("Player 1 Wins");
} else if (player1 == "paper" && player2 == "rock") {
    console.log("Player 1 Wins");
} else if (player1 == "scissors" && player2 == "paper") {
    console.log("Player 1 Wins");
} else if (player1 == player2) {
    console.log("It's a Tie");
} else {
    console.log("Player 2 Wins");
}

// 5. Simple Alarm System
// Objective: Simulate an alarm trigger based on conditions.
// Task:
// Ask the user two yes/no questions:
// Is the door open? (yes or no)
// Is motion detected? (yes or no)
// Use if conditions to print:
// "Alarm Triggered" if either condition is yes.
// "All Safe" if both conditions are no.
var door = prompt("Is the door open? (yes or no)");
var motion = prompt("Is motion detected? (yes or no)");
if (door == "yes" || motion == "yes") {
    console.log("Alarm Triggered");
} else {
    console.log("All Safe");
}

// 6. Simple Temperature Conversion
// Objective: Convert Celsius to Fahrenheit or vice versa.
// Task:
// Ask the user to choose a conversion type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.
// Take the temperature as input and use the formulas:
// C to F: F=(C×9/5)+32F = (C \times 9/5) + 32F=(C×9/5)+32
// F to C: C=(F−32)×5/9C = (F - 32) \times 5/9C=(F−32)×5/9
// Print the result using if conditions to ensure the correct formula is applied.
var choice = prompt("Enter 1 for Celsius to Fahrenheit and 2 for Fahrenheit to Celsius");
var temp = prompt("Enter the temperature");
if (choice == 1) {
    console.log(`The temperature in Fahrenheit is   ${(temp * 9/5) + 32}`);
} else if (choice == 2) {
    console.log(`The temperature in Celsius is "  ${(temp - 32) * 5/9}`);
}

// 7. Password Strength Checker
// Objective: Check the strength of a password.
// Task:
// Take a password as input and check conditions:
// Length >= 8: Print "Strong Password"
// Length between 5 and 7: Print "Moderate Password"
// Length < 5: Print "Weak Password"
// Extension: Check if the password contains numbers or special characters for more detailed feedback.
var password = prompt("Enter the password");
if (password.length >= 8) {
    console.log("Strong Password");
} else if (password.length >= 5 && password.length <= 7) {
    console.log("Moderate Password");
} else {
    console.log("Weak Password");
}

// 8. Coin Toss Simulator
// Objective: Simulate a coin toss.
// Task:
// Ask the user to input 1 for "Heads" or 0 for "Tails."
// Use the random module to simulate a coin toss (random.randint(0, 1)).
// Compare the user’s input with the result and print "You Win!" or "You Lose!"
var userChoice = prompt("Enter 1 for Heads and 0 for Tails");
if (userChoice == 1) {    
    console.log("You Win!");
} else {
    console.log("You Lose!");
}

// 9. Weather Suggestion Experiment
// Objective: Give outfit suggestions based on weather conditions.
// Task:
// Take weather input (Sunny, Rainy, Cold) from the user.
// Print:
// "Wear sunglasses" for Sunny
// "Take an umbrella" for Rainy
// "Wear a jacket" for Cold
var weather = prompt("Enter Sunny, Rainy or Cold");
if (weather == "sunny") {
    console.log("Wear sunglasses");
} else if (weather == "rainy") {
    console.log("Take an umbrella");
} else if (weather == "cold") {
    console.log("Wear a jacket");
} else {
    console.log("Invalid input");
}

// 10. Simple Arithmetic Quiz
// Objective: Test arithmetic skills interactively.
// Task:
// Generate two random numbers and a random operator (+, -, *, /) using the random module.
// Ask the user to calculate the result.
// Compare the user's answer with the correct answer using an if condition and print "Correct!" or "Try Again!"


// 11. Eligibility for Voting
// Write a program that checks if a person is eligible to vote based on their age (age >= 18).
// If eligible, print "You are eligible for voting."
// If not eligible, print "You are not eligible for voting."
var age = prompt("Enter your age");
if (age >= 18) {
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible for voting");
}

// 12. Maximum of Two Numbers
// Write a program that accepts two numbers and prints the larger number using if conditions.
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
if (num1 > num2) {
    console.log("The larger number is " + num1);
} else {
    console.log("The larger number is " + num2);
}







