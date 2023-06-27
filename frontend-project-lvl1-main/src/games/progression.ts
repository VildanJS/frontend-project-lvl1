import { startGame } from '../index.js';
import { randomInteger } from '../cli.js';

const RULE = 'What number is missing in the progression?';

export function progressionGame(): [result: string, question: string] {
  const number = randomInteger(1, 100);
  const step = randomInteger(1, 10);
  const progression: string[] = [];
  const hiddenIndex = randomInteger(0, 9);

  for (let i = 1; i < 11; i += 1) {
    const n = number + (i - 1) * step;
    progression.push(String(n));
  }

  const result = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [result, question];
}

export const startProgressionGame = () => startGame(progressionGame, RULE);
