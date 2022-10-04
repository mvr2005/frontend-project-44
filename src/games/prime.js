import startGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const implementationGame = () => {
  const arrayTaskSolution = [];
  for (let i = 0; i < 3; i += 1) {
    let value = 'yes';
    const actualValue = generateRandomNumber(2, 100);
    for (let j = 2; j < actualValue; j += 1) {
      if (actualValue % j === 0) {
        value = 'no';
        break;
      }
    }
    arrayTaskSolution[i] = [actualValue, value];
  }
  return arrayTaskSolution;
};

const startGamePrime = () => {
  const textTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrayTaskSolution = implementationGame();
  startGame(textTask, arrayTaskSolution);
};

export default startGamePrime;
