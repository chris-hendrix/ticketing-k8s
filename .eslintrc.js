module.exports = {
  extends: ['standard-with-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // Allow the use of 'require' for importing modules
    '@typescript-eslint/explicit-function-return-type': 'off', // Express routes don't always need explicit return types
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow omitting return types on functions
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }], // Ensure promises are handled or awaited properly
    '@typescript-eslint/quotes': ['error', 'double'], // Enforce double quotes
    '@typescript-eslint/semi': ['error', 'always'], // Require semicolons
  },
};