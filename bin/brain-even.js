#!/usr/bin/env node

import readlineSync from 'readline-sync';
import startGame from '../src/index.js';

startGame();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 1; i <= 3; i += 1) {
  let number = Math.random() * 100;
  number = Math.floor(number);
  let value = '';
  if (number % 2 === 0) {
    value = 'yes';
  } else {
    value = 'no';
  }
  const value2 = readlineSync.question(`${'Question: '}${number}${'\nYour answer: '}`);
  if (value2 === value) {
    console.log('Correct!');
  } else {
    console.log(`${"'"}${value2}${"'"}${"is wrong answer ;(. Correct answer was '"}${value}${"'.\nLet's try again, Bill!"}`);
    break;
  }
}
