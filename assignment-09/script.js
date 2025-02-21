// List of loop programming exercises
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
function printNaturalNumbers() {
    var num= document.getElementById("inputNumber").value;
    var i = 1;
    var result = document.getElementById("result");
    while (i <= num) {
        result.innerHTML += i + " ,";
        i++;
    }
}

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
function reverseNaturalNumbers() {
    var num= document.getElementById("inputNumber1").value;
    var i = num;
    var result = document.getElementById("result1");
    while (i >= 1) {
        result.innerHTML += i + " ,";
        i--;
    }
}

// 3. Write a js program to print all alphabets from a to z. - using while loop
function printAlphabets() {
    var result = document.getElementById("result2");
    var i = 97;
    while (i <= 122) {
        result.innerHTML += String.fromCharCode(i) + " ,";
        i++;
    }
   
}

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop
function printEvenNumbers() {
    var result = document.getElementById("result3");
    var i = 2;
    while (i <= 100) {
        result.innerHTML += i + " ,";
        i += 2;
    }
}

// 5. Write a js program to print all odd number between 1 to 100.
function printOddNumbers() {
    var result = document.getElementById("result4");
    var i = 1;
    while (i <= 100) {
        result.innerHTML += i + " ,";
        i += 2;
    }
}

// 6. Write a js program to find sum of all natural numbers between 1 to n - using for loop
function sumOfNaturalNumbers() {
    var num= document.getElementById("inputNumber2").value;
    var result = document.getElementById("result5");
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    result.innerHTML += sum;
    
}


