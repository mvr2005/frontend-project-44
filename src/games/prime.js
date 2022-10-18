import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const isPrime = (number) => {
  let value = false;
  for (let i = 2; i < number; i += 1) {
    value = (number % i) === 0;
    if (value === true) {
      break;
    }
  }
  return value;
};

const primeNumberCheck = (actualValue) => {
  let value = 'yes';
  if (isPrime(actualValue) === true) {
    value = 'no';
  }
  return value;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const actualValue = generateRandomNumber(2, 100);
    const value = primeNumberCheck(actualValue);
    taskAndSolution[i] = [actualValue, value];
  }
  return taskAndSolution;
};

const startGamePrime = () => {
  const textTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrayTaskSolution = gamesRounds();
  startGame(textTask, arrayTaskSolution);
};

export default startGamePrime;
