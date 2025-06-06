// Check Positive or Negative
let number = -5;
if (number > 0) {
    console.log(`${number} is positive.`);
} else if (number < 0) {
    console.log(`${number} is negative.`);
} else {
    console.log(`${number} is zero.`);
}

// Comparision
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}.`);
} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}.`);
} else {
    console.log(`${num1} is equal to ${num2}.`);
}

// Arithmatic operations
function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resultDiv = document.getElementById("result");

    console.log("Addition:", n1 + n2);
    console.log("Subtraction:", n1 - n2);
    console.log("Multiplication:", n1 * n2);
    console.log("Division:", n1 / n2);
    console.log("Modulus:", n1 % n2);

    // let result = `
    //     Addition: ${n1 + n2}<br>
    //     Subtraction: ${n1 - n2}<br>
    //     Multiplication: ${n1 * n2}<br>
    //     Division: ${n1 / n2}<br>
    //     Modulus: ${n1 % n2}
    //   `;

    // resultDiv.innerHTML = result;
}