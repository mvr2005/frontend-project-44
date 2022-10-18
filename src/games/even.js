import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const isEven = (number) => (number % 2) === 0;

const parityCheck = (number) => {
  const answer = isEven(number) ? 'yes' : 'no';
  return answer;
};

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const actualValue = generateRandomNumber(1, 100);
    const value = parityCheck(actualValue);
    taskAndSolution[i] = [actualValue, value];
  }
  return taskAndSolution;
};

const startGameEven = () => {
  const TextTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const arrayTaskSolution = gamesRounds();
  startGame(TextTask, arrayTaskSolution);
};

export default startGameEven;
