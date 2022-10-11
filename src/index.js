import readlineSync from 'readline-sync';
import askQuestion from './cli.js';

export const startGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion();
  return name;
};

export const numberRound = 3;

export const startGame = (textTask, arrayTaskSolution) => {
  const name = startGames();
  console.log(textTask);
  let numberCorrectAnswers = 0;
  for (let i = 0; i < numberRound; i += 1) {
    const task = arrayTaskSolution[i][0];
    const answer = arrayTaskSolution[i][1];
    const currentValue = readlineSync.question(`Question: ${task}\nYour answer: `);
    if (currentValue === answer) {
      console.log('Correct!');
      numberCorrectAnswers += 1;
      if (numberCorrectAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${currentValue}'is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
