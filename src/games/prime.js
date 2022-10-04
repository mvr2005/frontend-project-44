import startGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const implementationGame = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    let value = 'yes';
    const actualValue = generateRandomNumber(2, 100);
    for (let j = 2; j < actualValue; j += 1) {
      if (actualValue % j === 0) {
        value = 'no';
        break;
      }
    }
    array[i] = [actualValue, value];
  }
  return array;
};

const startGamePrime = () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const array = implementationGame();
  startGame(text, array);
};

export default startGamePrime;
