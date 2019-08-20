module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'prettier',
    'plugin:eslint-comments/recommended',
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
  plugins: ['prettier'],
  rules: {
    'eqeqeq': ['error', 'smart'],
    'max-len': ['error', {
      code: 80,
      // Allow import, export and implements statements. Also long backticks
      ignorePattern: '^import [^,]+ from |^export | implements | `.{30,}`',
      ignoreComments: true,
    }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-use-before-define': ['error', { functions: false, 'classes': true }],
    'no-warning-comments': ['error', { terms: ['fixme'], location: 'start' }],
    'object-curly-newline': ['error', { consistent: true }],
    'import/no-anonymous-default-export': ['error'],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
      },
    ],
  },
};
