import startGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

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
  for (let i = 0; i < 6; i += 2) {
    const stepProgession = generateRandomNumber(1, 20);
    const passPlace = generateRandomNumber(1, 10);
    const startProgression = generateRandomNumber(1, 20);
    const arrProgression = [startProgression];
    for (let j = 0; j < 9; j += 1) {
      arrProgression.push(arrProgression[j] + stepProgession);
    }
    digit = String(arrProgression[passPlace]);
    arrProgression[passPlace] = '..';
    array[i] = progressionString(arrProgression).trim();
    array[i + 1] = digit;
  }
  return array;
};

const startGameProgression = () => {
  const text = 'What number is missing in the progression?';
  const array = implementationGame();
  startGame(text, array);
};

export default startGameProgression;
