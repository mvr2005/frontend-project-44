import { selectNumber } from '../index.js';

const selectOperanion = () => {
  const operation = ['+', '-', '*'];
  let selectedOperator = '';
  const digit = selectNumber();
  if (digit <= 33) {
    selectedOperator = operation[0];
  } else if (digit > 66) {
    selectedOperator = operation[1];
  } else {
    selectedOperator = operation[2];
  }
  return selectedOperator;
};

const implementationGame = () => {
  const array = [];
  for (let i = 0; i < 6; i += 2) {
    const digit1 = selectNumber();
    const digit2 = selectNumber();
    const operation = selectOperanion();
    let actualValue = '';
    let result = 0;
    switch (operation) {
      case '+':
        result = digit1 + digit2;
        actualValue = `${digit1}${'+'}${digit2}`;
        break;
      case '-':
        result = digit1 - digit2;
        actualValue = `${digit1}${'-'}${digit2}`;
        break;
      case '*':
        result = digit1 * digit2;
        actualValue = `${digit1}${'*'}${digit2}`;
        break;
        // no default
    }
    result = String(result);
    array[i] = actualValue;
    array[i + 1] = result;
  }
  return array;
};

const text = 'What is the result of the expression?';
const array = implementationGame();

export { text, array };
