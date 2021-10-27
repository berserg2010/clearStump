module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-empty-line-before': [ 'always', {
      'except': [ 'first-nested' ],
      'ignore': [ 'after-declaration' ],
    }],
  },
};
