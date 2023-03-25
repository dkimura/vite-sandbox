/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['kentcdodds', 'kentcdodds/jest', 'kentcdodds/react'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: require.resolve('./.tsconfig.json'),
      },
    },
  ],
}

module.exports = config
