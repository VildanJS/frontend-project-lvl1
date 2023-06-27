import { startGame } from '../index';
import { randomInteger, isPrime } from '../cli';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const primeGame = (): [result: string, question: string] => {
  const question = randomInteger(1, 100);
  const result = isPrime(question) ? 'yes' : 'no';
  return [result, String(question)];
};

export const startPrimeGame = () => startGame(primeGame, RULE);
