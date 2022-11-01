import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const calcDivisor = (number1, number2) => {
  const numberMin = Math.min(number1, number2);
  const numberMax = Math.max(number1, number2);
  for (let i = numberMin; i > 1; i -= 1) {
    if ((numberMin % i) === 0 && (numberMax % i) === 0) {
      return i;
    }
  }
  return 1;
};

const createGamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const divisor = calcDivisor(number1, number2);
    const minMaxString = `${number1} ${number2}`;
    taskAndSolution[i] = [minMaxString, String(divisor)];
  }
  return taskAndSolution;
};

const startGameGcd = () => {
  const textTask = 'Find the greatest common divisor of given numbers.';
  const taskAndSolution = createGamesRounds();

  startGame(textTask, taskAndSolution);
};

export default startGameGcd;
