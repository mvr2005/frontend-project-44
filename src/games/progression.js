import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const progressionString = (arr) => {
  const progressionStrings = arr.join(' ');
  return progressionStrings;
};

const progression = (stepProgession, startProgession) => {
  const lengthProgression = 9;
  const Progression = [startProgession];
  for (let j = 0; j < lengthProgression; j += 1) {
    Progression.push(Progression[j] + stepProgession);
  }
  return Progression;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const passPlace = generateRandomNumber(1, 10);
    const Progression = progression(generateRandomNumber(1, 20), generateRandomNumber(1, 20));
    const digit = String(Progression[passPlace]);
    Progression[passPlace] = '..';
    taskAndSolution[i] = [progressionString(Progression).trim(), digit];
  }
  return taskAndSolution;
};

const startGameProgression = () => {
  const textTask = 'What number is missing in the progression?';
  const taskAndSolution = gamesRounds();

  startGame(textTask, taskAndSolution);
};

export default startGameProgression;
