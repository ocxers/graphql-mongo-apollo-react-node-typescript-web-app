module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [],
  globals: {
    test: true,
    expect: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    quotes: [1, 'single', {
      allowTemplateLiterals: true
    }],
    '@typescript-eslint/camelcase': [1, { ignoreDestructuring: true, properties: 'never' }],
    'vue/max-attributes-per-line': [1, {
      singleline: 3,
      multiline: 1
    }]
  }
}
