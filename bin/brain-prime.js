#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { text, array } from '../src/games/prime.js';

startGame(text, array);