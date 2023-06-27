import { startGame } from '../index.js';
import { randomInteger, isPrime } from '../cli.js';
const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const primeGame = () => {
  const question = randomInteger(1, 100);
  const result = isPrime(question) ? 'yes' : 'no';
  return [result, String(question)];
};
export const startPrimeGame = () => startGame(primeGame, RULE);

//# sourceMappingURL=prime.js.map