let prevNumber = "";
let calculatorOperator = "";
let currentNumber = "0";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputOperator = (operator) => {
  prevNumber = currentNumber;
  calculatorOperator = operator;
  currentNumber = "";
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculatorOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculatorOperator = "";
};

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculatorOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});
