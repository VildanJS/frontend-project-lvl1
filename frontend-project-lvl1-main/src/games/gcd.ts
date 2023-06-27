import { startGame } from '../index.js';
import { randomInteger } from '../cli.js';

const RULE = 'Find the greatest common divisor of given numbers.';

export const gcdGame = (): [result: string, question: string] => {
  const operand1 = randomInteger(1, 100);
  const operand2 = randomInteger(1, 100);

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
