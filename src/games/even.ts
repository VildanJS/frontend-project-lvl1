import { randomInteger } from '../cli';
import { startGame } from '../index';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

// eslint-disable-next-line import/prefer-default-export
export const evenGame = (): [result: string, question: string] => {
  const question = randomInteger(1, 100);
  const result = question % 2 === 0 ? 'yes' : 'no';
  return [result, String(question)];
};

export const startEvenGame = () => startGame(evenGame, RULE);
