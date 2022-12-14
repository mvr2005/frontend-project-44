import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const operators = ['+', '-', '*'];

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

const createGamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const digit1 = generateRandomNumber(1, 100);
    const digit2 = generateRandomNumber(1, 100);
    const operation = operators[generateRandomNumber(0, operators.length - 1)];
    const actualValue = `${digit1} ${operation} ${digit2}`;
    const result = calculation(digit1, digit2, operation);

    taskAndSolution[i] = [actualValue, String(result)];
  }
  return taskAndSolution;
};

const startGameCalc = () => {
  const textTask = 'What is the result of the expression?';
  const taskAndSolution = createGamesRounds();

  startGame(textTask, taskAndSolution);
};

export default startGameCalc;
