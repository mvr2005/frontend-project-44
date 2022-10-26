import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const minPrimeNumber = 2;

const isPrime = (number) => {
  for (let i = minPrimeNumber; i < number; i += 1) {
    if ((number % i) === 0) {
      return true;
    }
  }
  return false;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const number = generateRandomNumber(minPrimeNumber, 100);
    const ansver = isPrime(number) ? 'no' : 'yes';
    taskAndSolution[i] = [number, ansver];
  }
  return taskAndSolution;
};

const startGamePrime = () => {
  const textTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskAndSolution = gamesRounds();

  startGame(textTask, taskAndSolution);
};

export default startGamePrime;
