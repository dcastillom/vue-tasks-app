module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended'],
  plugins: ['import', 'simple-import-sort'],
  parser: 'vue-eslint-parser',
  rules: {
    semi: 0,
    indent: [2, 2],
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 2,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-indent': 0,
  },
}
