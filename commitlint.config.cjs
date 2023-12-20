module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['lower-case']],
    'subject-max-length': [2, 'always', 30],
    'type-case': [2, 'always', ['lower-case']],
    'type-enum': [
      2,
      'always',
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
  },
}
