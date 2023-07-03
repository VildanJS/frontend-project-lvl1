import readlineSync from 'readline-sync';
import { greeting } from './cli';
import { GameResult } from './games/types';

const roundsCount = 3;

export const startGame = (game: () => GameResult, rule: string): void => {
  const userName = greeting();
  console.log(rule);

  const CONGRATS = `Congratulations, ${userName}!`;
  const CORRECT = 'Correct!';

  for (let i = 0; i < roundsCount; i += 1) {
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
  }

  console.log(CONGRATS);
};
