import readlineSync from 'readline-sync';

export const numberRound = 3;

export const startGame = (textTask, taskAndSolution) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`${'Hello, '}${name}${'!'}`);
  console.log(textTask);
  for (let i = 0; i < numberRound; i += 1) {
    const [task, answer] = taskAndSolution[i];
    const currentValue = readlineSync.question(`Question: ${task}\nYour answer: `);
    if (currentValue === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${currentValue}'is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
