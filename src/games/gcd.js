import startGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const calcMinMax = (dig1, dig2) => {
  const arrMinMax = [];
  if (dig1 <= dig2) {
    arrMinMax[0] = dig1;
    arrMinMax[1] = dig2;
  } else {
    arrMinMax[0] = dig2;
    arrMinMax[1] = dig1;
  }
  return arrMinMax;
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  let divisor = 0;
  for (let i = 0; i < 3; i += 1) {
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
