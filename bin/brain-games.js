#!/usr/bin/env node

import askQuestion from '../src/cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

greeting();
askQuestion();

export default greeting;
