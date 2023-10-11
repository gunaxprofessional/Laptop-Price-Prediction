let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
  expression += num;
  display.value = expression;
}

function appendOperator(operator) {
  if (expression === '') return;
  expression += operator;
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function backspace() {
  expression = expression.slice(0, -1);
  display.value = expression;
}