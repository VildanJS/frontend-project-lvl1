import { startGame } from '../index';
import { GameResult } from './types';
import { getRandomInRange } from '../utils';

const RULE = 'What is the result of the expression?';

export const calcGame = (): GameResult => {
  const operators = ['+', '-', '*'];
  const index = getRandomInRange(0, 2);
  const operator = operators[index];
  const operand1 = getRandomInRange(1, 10);
  const operand2 = getRandomInRange(1, 10);

  const question = `${operand1} ${operator} ${operand2}`;

  let result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      result = null;
  }

  return [String(result), question];
};

export const startCalcGame = () => startGame(calcGame, RULE);
