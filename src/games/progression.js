import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const progressionString = (arr) => {
  const progressionStrings = arr.join(' ');
  return progressionStrings;
};

const progression = () => {
  const stepProgession = generateRandomNumber(1, 20);
  const arrProgression = [generateRandomNumber(1, 20)];
  for (let j = 0; j < 9; j += 1) {
    arrProgression.push(arrProgression[j] + stepProgession);
  }
  return arrProgression;
};

const implementationGame = () => {
  const arrayTaskSolution = [];
  let digit = 0;
  for (let i = 0; i < numberRound; i += 1) {
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
