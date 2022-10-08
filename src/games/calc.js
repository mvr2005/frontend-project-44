import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const selectOperation = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[generateRandomNumber(0, 3)];
  return randomOperator;
};

const calculation = (digit1, digit2, operation) => {
  switch (operation) {
    case '+':
      return digit1 + digit2;
    case '-':
      return digit1 - digit2;
    case '*':
      return digit1 * digit2;
      // no default
  }
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const digit1 = generateRandomNumber(1, 100);
    const digit2 = generateRandomNumber(1, 100);
    const operation = selectOperation();
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
