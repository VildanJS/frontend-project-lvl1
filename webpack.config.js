const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    calc: path.resolve(__dirname, 'src', 'games', 'calc.ts'),
    even: path.resolve(__dirname, 'src', 'games', 'even.ts'),
    gcd: path.resolve(__dirname, 'src', 'games', 'gcd.ts'),
    prime: path.resolve(__dirname, 'src', 'games', 'prime.ts'),
    progression: path.resolve(__dirname, 'src', 'games', 'progression.ts'),
    greeting: path.resolve(__dirname, 'src', 'games', 'greeting.ts'),
  },
  output: {
    library: {
      type: 'commonjs',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
};
