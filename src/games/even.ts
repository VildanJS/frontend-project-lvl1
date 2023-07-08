import { startGame } from '../index';
import { GameResult } from './types';
import { getRandomInRange } from '../utils';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenGame = (): GameResult => {
  const randomInRange = getRandomInRange(1, 100);
  const answer = randomInRange % 2 === 0 ? 'yes' : 'no';

  const question = String(randomInRange);
  return [answer, question];
};

export const startEvenGame = () => startGame(evenGame, RULE);
