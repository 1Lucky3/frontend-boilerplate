module.exports = {
    env: {
        'browser': true,
        'es2021': true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'object-curly-spacing': ['error', 'never'],
        'max-len': ['error',{code: 150}],
        'no-multiple-empty-lines': ['error', {max: 1}],

        '@typescript-eslint/no-unused-vars': ['error', {vars: 'all', args: 'all', 'ignoreRestSiblings': false}],
        '@typescript-eslint/semi': ['error', 'always'],

        'react/jsx-newline': [2, {prevent: false}],
    },
    ignorePatterns: [
        'webpack.config.js',
        'dist',
        '.eslintrc.js'
    ],
};
