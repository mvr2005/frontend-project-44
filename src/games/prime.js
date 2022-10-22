import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const minPrimeNumber = 2;

const isPrime = (number) => {
  let value = false;
  for (let i = minPrimeNumber; i < number; i += 1) {
    value = (number % i) === 0;
    if (value === true) {
      break;
    }
  }
  return value;
};

const primeNumberCheck = (actualValue) => {
  const answer = isPrime(actualValue) ? 'no' : 'yes';
  return answer;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const actualValue = generateRandomNumber(minPrimeNumber, 100);
    const value = primeNumberCheck(actualValue);
    taskAndSolution[i] = [actualValue, value];
  }
  return taskAndSolution;
};

const startGamePrime = () => {
  const textTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskAndSolution = gamesRounds();
  startGame(textTask, taskAndSolution);
};

export default startGamePrime;
