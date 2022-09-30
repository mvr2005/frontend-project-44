import { selectNumber } from '../index.js';

const selectDigit = () => {
  let digit = selectNumber();
  if (digit >= 10) {
    digit = Math.floor(digit * 0.1);
  }
  return digit;
};

const progressionString = (arr) => {
  let progressionStrings = '';
  for (let i = 0; i < arr.length; i += 1) {
    const symbolStryng = String(arr[i]);
    progressionStrings = `${progressionStrings} ${symbolStryng}`;
  }
  return progressionStrings;
};

const implementationGame = () => {
  const array = [];
  let digit = 0;
  // let progressionSring = '';
  for (let i = 0; i < 6; i += 2) {
    const stepProgession = selectDigit();
    const passPlace = selectDigit();
    const startProgression = selectNumber();
    const arrProgression = [startProgression];
    for (let j = 0; j < 9; j += 1) {
      arrProgression.push(arrProgression[j] + stepProgession);
    }
    digit = String(arrProgression[passPlace]);
    arrProgression[passPlace] = '..';
    array[i] = progressionString(arrProgression);
    array[i + 1] = digit;
  }
  return array;
};

const text = 'What number is missing in the progression?';
const array = implementationGame();

export { text, array };
