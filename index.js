module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'prettier',
    'prettier/flowtype'
  ],
  parser: 'babel-eslint',
  env: {
    es6: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['flowtype', 'prettier'],
  rules: {
    'eqeqeq': [2, 'smart'],
    'max-len': [2, 150],
    'no-underscore-dangle': [2, { allowAfterThis: true }],
    'import/no-anonymous-default-export': [2],
    'object-curly-newline': ['error', { 'consistent': true }],
    'prettier/prettier': [
      'error',
      {
        'parser': 'flow',
        'printWidth': 150,
        'singleQuote': true,
        'trailingComma': 'all',
      },
    ],
  },
};
