let firstNumber = 0;
let secondNumber = 0;
let operator = ""
let displayValue = 0;
let state = 0;

const clear = document.querySelector("button.clear");
const display = document.querySelector("#display");
display.textContent = displayValue;


function add(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function multiply(a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate(a, b, c) {
    switch (c) {
        case "+": return Math.round(add(a, b) * 10000) / 10000;
        case "-": return Math.round(subtract(a, b) * 10000) / 10000;
        case "*": return Math.round(mulitply(a, b) * 10000) / 10000;
        case "/": return Math.round(divide(a, b) * 10000) / 10000;
    }
}

/* Enter the number
press operator
whe entering the first number, displayvalue is cleared only one time 
*/


function pressNumber(number) {
    if (operator !== "" && state == 0) {
        displayValue = number;
        state = 1;
    } else if (displayValue == 0 && displayValue.toString().indexOf('.') > -1) { 
        displayValue += number
    } else if (displayValue == 0) {
        displayValue = number
    } else if (displayValue !== 0) {
        displayValue += number
    }
    display.textContent = displayValue;
}

function pressOperator(oper) {
    if (operator == "") {
    operator = oper;
    firstNumber = displayValue;
    } else if (operator !== "" && state == 1) {
    displayValue = operate(firstNumber, displayValue, operator);
    display.textContent = displayValue;
    firstNumber = displayValue;
    state = 0;
    operator = oper;
    } else if (operator !== "" && state == 0) {
        operator = oper;
    }
}

function pressClear() {
    operator = "";
    firstNumber = 0;
    displayValue = firstNumber;
    display.textContent = displayValue;
}

function pressEqual() {
    if (firstNumber !== 0) {
    displayValue = operate(firstNumber, displayValue, operator);
    display.textContent = displayValue;
    firstNumber = displayValue;
    state = 0;
    } else if (firstNumber == 0) {
        display.textContent = display.textContent;
    }
}

function pressPoint() {
    if (displayValue.toString().indexOf('.') > -1) {
        displayValue
    } else {
    displayValue += ".";
    display.textContent = displayValue;
    }
}

function pressBack() {
    displayValue = Math.floor(displayValue / 10) // -> 1234;
    display.textContent = displayValue;
}

const numbers = document.querySelectorAll("button.number");
numbers.forEach((number) => {
    // and for each one we add a 'click' listener
    number.addEventListener("click", () => {
        pressNumber(number.textContent);
      });
  });

const operators = document.querySelectorAll("button.operator");
operators.forEach((operator) => {
    // and for each one we add a 'click' listener
    operator.addEventListener("click", () => {
        pressOperator(operator.textContent);
    });
  });

    const clearance = document.querySelector("button.clear");
    clearance.addEventListener("click", () => {
          pressClear();
      });

    const equality = document.querySelector("button.equal");
      equality.addEventListener("click", () => {
            pressEqual();
        });
    
    const pointity = document.querySelector("button.point");
      pointity.addEventListener("click", () => {
            pressPoint();
        });
        const deletity = document.querySelector("button.back");
        deletity.addEventListener("click", () => {
              pressBack();
          });