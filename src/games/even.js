import { startGame, numberRound } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const isEven = (number) => (number % 2) === 0;

const gamesRounds = () => {
  const taskAndSolution = [];
  for (let i = 0; i < numberRound; i += 1) {
    const number = generateRandomNumber(1, 100);
    const answer = isEven(number) ? 'yes' : 'no';
    taskAndSolution[i] = [number, answer];
  }
  return taskAndSolution;
};

const startGameEven = () => {
  const TextTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const taskAndSolution = gamesRounds();

  startGame(TextTask, taskAndSolution);
};

export default startGameEven;
