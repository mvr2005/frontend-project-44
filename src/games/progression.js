import startGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';
import numberRound from '../number-round.js';

const progressionString = (arr) => {
  let progressionStrings = '';
  for (let i = 0; i < arr.length; i += 1) {
    const symbolStryng = String(arr[i]);
    progressionStrings = `${progressionStrings} ${symbolStryng}`;
  }
  return progressionStrings;
};

const progression = () => {
  const stepProgession = generateRandomNumber(1, 20);
  const startProgression = generateRandomNumber(1, 20);
  const arrProgression = [startProgression];
  for (let j = 0; j < 9; j += 1) {
    arrProgression.push(arrProgression[j] + stepProgession);
  }
  return arrProgression;
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  let digit = 0;
  for (let i = 0; i < numberRound(); i += 1) {
    const passPlace = generateRandomNumber(1, 10);
    const arrProgression = progression();
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
