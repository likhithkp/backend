module.exports = {
  env: {
    // browser: true,
    // commonjs: true,
    // es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: { ecmaVersion: 'latest' },
  ignorePatterns: ['**/*.test.js', '**/*.spec.js'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': 'off',
    'no-console': ['error'],
    quotes: [
      'error',
      'single',
    ],
    'object-curly-newline': ['error', { multiline: true, minProperties: 7 }],
    'no-unused-vars': ['error', { args: 'none' }],
    'import/newline-after-import': ['error', { count: 1 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'func-names': ['error', 'as-needed'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-len': ['error', {
      code: 220,
      ignoreTrailingComments: true,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
    }],
    eqeqeq: 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    }],
  },
  overrides: [
    { files: ['src/*.js', 'src/*.tsx'] },
  ],
};
