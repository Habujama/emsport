module.exports = {
    env: {
      browser: true,
      node: true,
      es2020: true,
      'jest/globals': true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'jest'],
    ignorePatterns: ['static', 'storybook-static'],
    rules: {
      'no-console': [2, { allow: ['info'] }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 0,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [2]
    },
    overrides: [
      {
        files: ['*.js'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
      },
    ],
  }
  