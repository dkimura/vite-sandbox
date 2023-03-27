const baseConfig = require('../../.lintstagedrc.cjs')

module.exports = {
  ...baseConfig,
  '*.{ts,tsx,js,cjs}': ['prettier --write', 'eslint --fix'],
}
