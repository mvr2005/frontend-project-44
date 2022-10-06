import startGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';
import numberRound from '../number-round.js';

const calcMinMax = (dig1, dig2) => {
  const arrMinMax = [Math.min(dig1, dig2), Math.max(dig1, dig2)];
  return arrMinMax;
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  let divisor = 0;
  for (let i = 0; i < numberRound(); i += 1) {
    const arrMinMax = calcMinMax(generateRandomNumber(1, 100), generateRandomNumber(1, 100));
    for (let j = arrMinMax[0]; j > 0; j -= 1) {
      if ((arrMinMax[0] % j) === 0 && (arrMinMax[1] % j) === 0) {
        divisor = j;
        break;
      }
    }
    const minString = String(arrMinMax[0]);
    const maxString = String(arrMinMax[1]);
    const minMaxString = `${minString} ${maxString}`;
    arrayTaskSolution[i] = [minMaxString, String(divisor)];
  }
  return arrayTaskSolution;
};

const startGameGcd = () => {
  const textTask = 'Find the greatest common divisor of given numbers.';
  const arrayTaskSolution = implementationGame();
  startGame(textTask, arrayTaskSolution);
};

export default startGameGcd;
