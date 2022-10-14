import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const calcMinMax = (dig1, dig2) => {
  const arrMinMax = [Math.min(dig1, dig2), Math.max(dig1, dig2)];
  return arrMinMax;
};

const calcDivisor = (numberMin, numberMax) => {
  let divisor = 0;
  for (let j = numberMin[0]; j > 0; j -= 1) {
    if ((numberMin % j) === 0 && (numberMax[1] % j) === 0) {
      divisor = j;
      break;
    }
  }
  return divisor;
};

const gamesRounds = () => {
  const arrayTaskSolution = [];
  let divisor = 0;
  for (let i = 0; i < numberRound; i += 1) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const numberMin = calcMinMax(number1, number2)[0];
    const numberMax = calcMinMax(number1, number2)[1];
    divisor = calcDivisor(numberMin, numberMax);
    const minString = String(numberMin);
    const maxString = String(numberMax);
    const minMaxString = `${minString} ${maxString}`;
    arrayTaskSolution[i] = [minMaxString, String(divisor)];
  }
  return arrayTaskSolution;
};

const startGameGcd = () => {
  const textTask = 'Find the greatest common divisor of given numbers.';
  const arrayTaskSolution = gamesRounds();
  startGame(textTask, arrayTaskSolution);
};

export default startGameGcd;
