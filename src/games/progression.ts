import { startGame } from '../index';
import { GameResult } from './types';
import { getRandomInRange } from '../utils';

const RULE = 'What number is missing in the progression?';

export function progressionGame(): GameResult {
  const number = getRandomInRange(1, 100);
  const step = getRandomInRange(1, 10);
  const progression: string[] = [];
  const hiddenIndex = getRandomInRange(0, 9);

  for (let i = 1; i < 11; i += 1) {
    const n = number + (i - 1) * step;
    progression.push(String(n));
  }

  const answer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [answer, question];
}

export const startProgressionGame = () => startGame(progressionGame, RULE);
