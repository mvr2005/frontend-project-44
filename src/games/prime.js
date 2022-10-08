import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const primeNumberCheck = (actualValue) => {
  let value = 'yes';
  for (let i = 2; i < actualValue; i += 1) {
    if (actualValue % i === 0) {
      value = 'no';
      break;
    }
  }
  return value;
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const actualValue = generateRandomNumber(2, 100);
    const value = primeNumberCheck(actualValue);
    arrayTaskSolution[i] = [actualValue, value];
  }
  return arrayTaskSolution;
};

const startGamePrime = () => {
  const textTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrayTaskSolution = implementationGame();
  startGame(textTask, arrayTaskSolution);
};

export default startGamePrime;
