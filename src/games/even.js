import { selectNumber } from '../index.js';

const implementationGame = () => {
  const array = [];
  for (let i = 0; i < 6; i += 2) {
    const actualValue = selectNumber();
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

const text = 'Answer "yes" if the number is even, otherwise answer "no".';
const array = implementationGame();

export { text, array };
