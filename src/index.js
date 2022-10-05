import readlineSync from 'readline-sync';
import greeting from '../bin/brain-games.js';
import askQuestion from './cli.js';

const startGame = (textTask, arrayTaskSolution) => {
  greeting();
  const name = askQuestion();
  console.log(textTask);
  let numberCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const currentValue = readlineSync.question(`${'Question: '}${arrayTaskSolution[i][0]}${'\nYour answer: '}`);
    if (currentValue === arrayTaskSolution[i][1]) {
      console.log('Correct!');
      numberCorrectAnswers += 1;
      if (numberCorrectAnswers === 3) {
        console.log(`${'Congratulations,'} ${name}!`);
      }
    } else {
      console.log(`${"'"}${currentValue}${"'"}${"is wrong answer ;(. Correct answer was '"}${arrayTaskSolution[i][1]}${"'.\nLet's try again, "}${name}${'!'}`);
      break;
    }
  }
};

export default startGame;
