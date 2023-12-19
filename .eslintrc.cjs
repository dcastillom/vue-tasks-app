module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    semi: 0,
    indent: [2, 2],
    'no-unused-expressions': ['error', {}],
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 2,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-indent': 0,
  },
}
