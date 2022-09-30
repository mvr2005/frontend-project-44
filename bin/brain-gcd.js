#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { text, array } from '../src/games/gcd.js';

startGame(text, array);
