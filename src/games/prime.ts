import { startGame } from '../index';
import { GameResult } from './types';
import { getRandomInRange } from '../utils';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num % 2 === 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

export const primeGame = (): GameResult => {
  const question = getRandomInRange(1, 100);
  const result = isPrime(question) ? 'yes' : 'no';

  const strQuestion = String(question);
  return [result, strQuestion];
};

export const startPrimeGame = () => startGame(primeGame, RULE);
