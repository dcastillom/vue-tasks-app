module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-case': [2, 'always', ['lower-case']],
    'body-case': [2, 'always', ['lower-case']],
    'scope-case': [2, 'always', ['lower-case']],
    'subject-case': [2, 'always', ['lower-case']],
    'type-case': [2, 'always', ['lower-case']],
    'type-enum': [
      2,
      'never',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    'scope-enum': [2, 'never'],
  },
}
