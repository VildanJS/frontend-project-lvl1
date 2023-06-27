import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

// eslint-disable-next-line import/prefer-default-export
export const startGame = (game, rule) => {
  const userName = greeting();
  console.log(rule);
  const CONGRATS = `Congratulations, ${userName}!`;
  const CORRECT = 'Correct!';
  let count = 3;
  while (count > 0) {
    const [result, question] = game();
    const QUESTION = `Question: ${question}`;
    console.log(QUESTION);
    const answer = readlineSync.question('Your answer: ');
    const WRONG = `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
    if (answer !== result) {
      console.log(WRONG);
      return;
    }
    console.log(CORRECT);
    if (count === 1) console.log(CONGRATS);
    count -= 1;
  }
};

//# sourceMappingURL=index.js.map