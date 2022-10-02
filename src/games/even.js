import { selectNumber } from '../index.js';

const implementationGame = () => {
  const array = [];
  for (let i = 0; i < 6; i += 2) {
    const actualValue = selectNumber(1, 100);
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

const text = "Answer 'yes' if number even otherwise answer 'no'.";
const array = implementationGame();

export { text, array };
