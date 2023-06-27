import readlineSync from 'readline-sync';

export const greeting = (): string => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export function randomInteger(min: number, max: number): number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const isPrime = (num: number): boolean => {
  if (num === 1) {
    return false;
  }
  const m = Math.sqrt(num);
  for (let i = 2; i < m; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
