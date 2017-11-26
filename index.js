module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
  ].map(require.resolve),
  parser: 'babel-eslint',
  env:{
      es6: true,
      commonjs: true,
  },
  parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module'
  },
  plugins: ['flowtype'],
  rules: {
    'eqeqeq': [2, 'smart'],
    'max-len': [2, 150],
  },
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: './jest.conf.json',
      },
    },
  },
};
