import startGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const progressionString = (arr) => {
  let progressionStrings = '';
  for (let i = 0; i < arr.length; i += 1) {
    const symbolStryng = String(arr[i]);
    progressionStrings = `${progressionStrings} ${symbolStryng}`;
  }
  return progressionStrings;
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  let digit = 0;
  for (let i = 0; i < 3; i += 1) {
    const stepProgession = generateRandomNumber(1, 20);
    const passPlace = generateRandomNumber(1, 10);
    const startProgression = generateRandomNumber(1, 20);
    const arrProgression = [startProgression];
    for (let j = 0; j < 9; j += 1) {
      arrProgression.push(arrProgression[j] + stepProgession);
    }
    digit = String(arrProgression[passPlace]);
    arrProgression[passPlace] = '..';
    arrayTaskSolution[i] = [progressionString(arrProgression).trim(), digit];
  }
  return arrayTaskSolution;
};

const startGameProgression = () => {
  const textTask = 'What number is missing in the progression?';
  const arrayTaskSolution = implementationGame();
  startGame(textTask, arrayTaskSolution);
};

export default startGameProgression;
