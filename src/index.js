import readlineSync from 'readline-sync';

export const startGame = (text, array) => {
  console.log(`${'Welcome to the Brain Games!'}`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`${'Hello, '}${name}${'!'}`);
  console.log(text);
  let numberCorrectAnswers = 0;
  for (let i = 0; i < 6; i += 2) {
    const currentValue = readlineSync.question(`${'Question: '}${array[i]}${'\nYour answer: '}`);
    if (currentValue === array[i + 1]) {
      console.log('Correct!');
      numberCorrectAnswers += 1;
      if (numberCorrectAnswers === 3) {
        console.log(`${'Congratulations,'} ${name}!`);
      }
    } else {
      console.log(`${"'"}${currentValue}${"'"}${"is wrong answer ;(. Correct answer was '"}${array[i + 1]}${"'.\nLet's try again, "}${name}${'!'}`);
      break;
    }
  }
};

export const selectNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
