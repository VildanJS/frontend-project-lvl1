import { startGame } from '../index';
import { GameResult } from './types';
import { getRandomInRange } from '../utils';

const RULE = 'Find the greatest common divisor of given numbers.';

export const gcdGame = (): GameResult => {
  const operand1 = getRandomInRange(1, 100);
  const operand2 = getRandomInRange(1, 100);

  let y = operand2; let x = operand1;

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  const question = `${operand1} ${operand2}`;

  return [String(x), question];
};

export const startGcdGame = () => startGame(gcdGame, RULE);
