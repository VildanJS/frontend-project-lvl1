import { startGame } from '../index';
import { GameResult } from './types';
import { getRandomInRange } from '../utils';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenGame = (): GameResult => {
  const question = getRandomInRange(1, 100);
  const result = question % 2 === 0 ? 'yes' : 'no';
  return [result, String(question)];
};

export const startEvenGame = () => startGame(evenGame, RULE);
