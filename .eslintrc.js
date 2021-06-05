const path = require('path')

/** @type {import("@typescript-eslint/experimental-utils").TSESLint.Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'react-hooks', '@emotion'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname
  },
  env: {
    node: true,
    jest: true,
    es6: true,
    browser: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      { name: 'Link', linkAttribute: 'to' }
    ],
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ]
  },
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': ['error'],
    curly: ['error', 'multi-line'],
    'interface-name': 'off',
    'jsx-boolean-value': 'off',
    'no-console': 'off',
    'no-duplicate-imports': 'warn',
    'no-empty-interface': 'off',
    'no-empty': ['off'],
    'no-implicit-dependencies': 'off',
    'no-submodule-imports': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-var-requires': 'off',
    'object-literal-sort-keys': 'off',
    'object-shorthand': ['warn', 'properties'],
    'ordered-imports': 'off',
    quotes: ['error', 'single', 'avoid-escape'],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          // infra層のimportを禁止する
          '@/infrastructure*',
          '@/usecases*'
        ],
        paths: [
          /* "." のみ (スラッシュなし) でのImportを禁止する #562 */
          '.'
        ]
      }
    ],
    // ts-eslint
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description'
      }
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    // react
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@emotion/pkg-renaming': 'error'
  }
}
