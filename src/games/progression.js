import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const lengthProgression = 9;

const generateProgression = (stepProgession, startProgession) => {
  const progression = [startProgession];
  for (let j = 0; j < lengthProgression; j += 1) {
    progression.push(progression[j] + stepProgession);
  }
  return progression;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const passPlace = generateRandomNumber(1, lengthProgression + 1);
    let progression = [];
    progression = generateProgression(generateRandomNumber(1, 20), generateRandomNumber(1, 20));
    const number = String(progression[passPlace]);
    progression[passPlace] = '..';
    progression = progression.join(' ');
    taskAndSolution[i] = [progression.trim(), number];
  }
  return taskAndSolution;
};

const startGameProgression = () => {
  const textTask = 'What number is missing in the progression?';
  const taskAndSolution = gamesRounds();

  startGame(textTask, taskAndSolution);
};

export default startGameProgression;
