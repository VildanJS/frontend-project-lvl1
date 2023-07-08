import { startGame } from '../index';
import { GameResult } from './types';
import { getRandomInRange } from '../utils';

const RULE = 'What is the result of the expression?';

const calculation = (num1: number, num2: number, operator: string): number => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*': return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

export const calcGame = (): GameResult => {
  const operators = ['+', '-', '*'];
  const index = getRandomInRange(0, 2);
  const operator = operators[index];
  const operand1 = getRandomInRange(1, 10);
  const operand2 = getRandomInRange(1, 10);

  const question = `${operand1} ${operator} ${operand2}`;

  const answer = String(calculation(operand1, operand2, operator));

  return [answer, question];
};

export const startCalcGame = () => startGame(calcGame, RULE);
