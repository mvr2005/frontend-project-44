import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const progressionString = (arr) => {
  const progressionStrings = arr.join(' ');
  return progressionStrings;
};

const progression = (stepProgession, startProgession) => {
  const lengthProgression = 9;
  const arrProgression = [startProgession];
  for (let j = 0; j < lengthProgression; j += 1) {
    arrProgression.push(arrProgression[j] + stepProgession);
  }
  return arrProgression;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  let digit = 0;
  for (let i = 0; i < numberRound; i += 1) {
    const passPlace = generateRandomNumber(1, 10);
    const arrProgression = progression(generateRandomNumber(1, 20), generateRandomNumber(1, 20));
    digit = String(arrProgression[passPlace]);
    arrProgression[passPlace] = '..';
    taskAndSolution[i] = [progressionString(arrProgression).trim(), digit];
  }
  return taskAndSolution;
};

const startGameProgression = () => {
  const textTask = 'What number is missing in the progression?';
  const arrayTaskSolution = gamesRounds();
  startGame(textTask, arrayTaskSolution);
};

export default startGameProgression;
