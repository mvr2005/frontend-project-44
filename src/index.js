import readlineSync from 'readline-sync';

const startGame = (textTask, arrayTaskSolution) => {
  console.log(`${'Welcome to the Brain Games!'}`);
  const name = readlineSync.question('May I have your name?: ');
  console.log(`${'Hello, '}${name}${'!'}`);
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
