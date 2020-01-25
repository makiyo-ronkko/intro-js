function calculate(order) {
  var result;
  var firstInput = parseInt(document.getElementById('firstinput').value);
  var secondInput = parseInt(document.getElementById('secondinput').value);

  if (order === 'add') {
    result = add(firstInput, secondInput);
  } else if (order === 'subtract') {
    result = subtract(firstInput, secondInput);
  } else if (order === 'multiply') {
    result = multiply(firstInput, secondInput);
  } else if (order === 'divide') {
    result = divide(firstInput, secondInput);
  }

  document.getElementById('final-result').innerText = result;

}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function myFunctionPi() {
  document.getElementById('test').innerHTML = Math.PI;
}

function myFunctionPow() {
  var firstInput = parseInt(document.getElementById('firstinput').value);
  var secondInput = parseInt(document.getElementById('secondinput').value);

  document.getElementById('test2').innerHTML = Math.pow(firstInput, secondInput);

}

function myFunctionSqrt() {
  var result = document.getElementById('final-result').innerText;
  document.getElementById('test3').innerHTML = Math.sqrt(result);
}