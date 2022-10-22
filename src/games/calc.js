import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const selectOperation = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[generateRandomNumber(0, operators.length - 1)];
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
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const digit1 = generateRandomNumber(1, 100);
    const digit2 = generateRandomNumber(1, 100);
    const operation = selectOperation();
    const actualValue = `${digit1} ${operation} ${digit2}`;
    const result = calculation(digit1, digit2, operation);
    taskAndSolution[i] = [actualValue, String(result)];
  }
  return taskAndSolution;
};

const startGameCalc = () => {
  const textTask = 'What is the result of the expression?';
  const taskAndSolution = gamesRounds();
  startGame(textTask, taskAndSolution);
};

export default startGameCalc;
