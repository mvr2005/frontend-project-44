import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const calcMinMax = (dig1, dig2) => {
  const arrMinMax = [Math.min(dig1, dig2), Math.max(dig1, dig2)];
  return arrMinMax;
};

const calcDivisor = (arrMinMax) => {
  let divisor = 0;
  for (let j = arrMinMax[0]; j > 0; j -= 1) {
    if ((arrMinMax[0] % j) === 0 && (arrMinMax[1] % j) === 0) {
      divisor = j;
      break;
    }
  }
  return divisor;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  let divisor = 0;
  for (let i = 0; i < numberRound; i += 1) {
    const arrMinMax = calcMinMax(generateRandomNumber(1, 100), generateRandomNumber(1, 100));
    /* Использование массива показалось наиболее удобным.
      Метод calcMinMax возвращает отсортированный массив и
      для вычисления максимального делителя в функции я тоже использую
      аргументом массив. Можно все сделать на переменных, но мне показалось
      сложнее. Написал код с переменными в файле gcd-variant.js */
    divisor = calcDivisor(arrMinMax);
    const minString = String(arrMinMax[0]);
    const maxString = String(arrMinMax[1]);
    const minMaxString = `${minString} ${maxString}`;
    taskAndSolution[i] = [minMaxString, String(divisor)];
  }
  return taskAndSolution;
};

const startGameGcd = () => {
  const textTask = 'Find the greatest common divisor of given numbers.';
  const arrayTaskSolution = gamesRounds();
  startGame(textTask, arrayTaskSolution);
};

export default startGameGcd;
