/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['kentcdodds', 'kentcdodds/jest', 'kentcdodds/react'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
}

module.exports = config
