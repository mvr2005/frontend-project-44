import askQuestion from './cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = askQuestion();
  return name;
};

export default greeting;
