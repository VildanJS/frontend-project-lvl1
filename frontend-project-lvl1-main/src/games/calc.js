import { randomInteger } from '../cli.js';
import { startGame } from '../index.js';
const RULE = 'What is the result of the expression?';

// eslint-disable-next-line import/prefer-default-export
export const calcGame = () => {
  const operators = ['+', '-', '*'];
  const index = randomInteger(0, 2);
  const operator = operators[index];
  const operand1 = randomInteger(1, 10);
  const operand2 = randomInteger(1, 10);
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

//# sourceMappingURL=calc.js.map