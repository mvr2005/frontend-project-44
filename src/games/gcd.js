import { selectNumber } from '../index.js';

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
  const array = [];
  let divisor = 0;
  for (let i = 0; i < 6; i += 2) {
    const arrMinMax = calcMinMax(selectNumber(1, 100), selectNumber(1, 100));
    for (let j = arrMinMax[0]; j > 0; j -= 1) {
      if ((arrMinMax[0] % j) === 0 && (arrMinMax[1] % j) === 0) {
        divisor = j;
        break;
      }
    }
    const minString = String(arrMinMax[0]);
    const maxString = String(arrMinMax[1]);
    const minMaxString = `${minString} ${maxString}`;
    array[i] = minMaxString;
    array[i + 1] = String(divisor);
  }
  return array;
};

const text = 'Find the greatest common divisor of given numbers.';
const array = implementationGame();

export { text, array };
