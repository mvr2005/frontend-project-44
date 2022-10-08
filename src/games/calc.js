import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const selectOperanion = () => {
  const [plus, minus, multiply] = ['+', '-', '*'];
  let selectedOperator = '';
  const digit = generateRandomNumber(1, 4);
  switch (digit) {
    case 1:
      selectedOperator = plus;
      break;
    case 2:
      selectedOperator = minus;
      break;
    case 3:
      selectedOperator = multiply;
      break;
          // no default
  }
  return selectedOperator;
};

const calculation = (digit1, digit2, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = digit1 + digit2;
      break;
    case '-':
      result = digit1 - digit2;
      break;
    case '*':
      result = digit1 * digit2;
      break;
      // no default
  }
  return result;
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const digit1 = generateRandomNumber(1, 100);
    const digit2 = generateRandomNumber(1, 100);
    const operation = selectOperanion();
    const actualValue = `${digit1} ${operation} ${digit2}`;
    const result = calculation(digit1, digit2, operation);
    arrayTaskSolution[i] = [actualValue, String(result)];
  }
  return arrayTaskSolution;
};

const startGameCalc = () => {
  const textTask = 'What is the result of the expression?';
  const arrayTaskSolution = implementationGame();
  startGame(textTask, arrayTaskSolution);
};

export default startGameCalc;
