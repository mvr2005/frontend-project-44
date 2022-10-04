import startGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const implementationGame = () => {
  const array = [];
  for (let i = 0; i < 6; i += 2) {
    const actualValue = generateRandomNumber(1, 100);
    let value = '';
    if (actualValue % 2 === 0) {
      value = 'yes';
    } else {
      value = 'no';
    }
    array[i] = actualValue;
    array[i + 1] = value;
  }
  return array;
};

const startGameEven = () => {
  const text = 'Answer "yes" if the number is even, otherwise answer "no".';
  const array = implementationGame();
  startGame(text, array);
};

export default startGameEven;
