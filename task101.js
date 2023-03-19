function j03() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let sum = number1+number2;
    document.getElementById("sum").innerHTML =
    sum;
document.getElementById("sum").innerHTML = number1 + " + " + number2 + " = " + sum
}