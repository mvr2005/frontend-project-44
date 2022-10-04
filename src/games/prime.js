import { selectNumber, startGame } from '../index.js';

const implementationGame = () => {
  const array = [];
  for (let i = 0; i < 6; i += 2) {
    let value = 'yes';
    const actualValue = selectNumber(1, 100);
    for (let j = 2; j < actualValue; j += 1) {
      if (actualValue % j === 0) {
        value = 'no';
        break;
      }
    }
    array[i] = actualValue;
    array[i + 1] = value;
  }
  return array;
};

const startGamePrime = () => {
  const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const array = implementationGame();
  startGame(text, array);
};

export default startGamePrime;
