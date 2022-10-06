import startGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';
import numberRound from '../number-round.js';

const implementationGame = () => {
  const arrayTaskSolution = [];
  for (let i = 0; i < numberRound(); i += 1) {
    const actualValue = generateRandomNumber(1, 100);
    let value = '';
    if (actualValue % 2 === 0) {
      value = 'yes';
    } else {
      value = 'no';
    }
    arrayTaskSolution[i] = [actualValue, value];
  }
  return arrayTaskSolution;
};

const startGameEven = () => {
  const TextTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const arrayTaskSolution = implementationGame();
  startGame(TextTask, arrayTaskSolution);
};

export default startGameEven;
