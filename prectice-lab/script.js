function checkNumber(){
    var num1 = document.getElementById("num-1").value;
    var num2 = document.getElementById("num-2").value;
    var num3 = document.getElementById("num-3").value;
    var result = document.getElementById("result");
    if (num1 > num2 && num1 > num3) {
        result.innerHTML ="Number first : " + num1 + " is the largest number";
    } 
    else if (num2 > num1 && num2 > num3) {
        result.innerHTML ="Number Second : " + num2 + " is the largest number";
    } 
    else if (num1 == num2 == num3) {
        result.innerHTML = "Number one is :" + num1 +", Number two is :  " + num2 + " and Number three is :  " +  num3 + "  : all numbers are equal";
    } 
    else  {
        result.innerHTML ="Number third : " + num3 + " is the largest number";
    }
}