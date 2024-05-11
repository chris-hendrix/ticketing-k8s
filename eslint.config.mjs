import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'quotes': ['error', 'single'], // enforce single quotes
      '@typescript-eslint/comma-dangle': 'off', // allows no comma dangle
      '@typescript-eslint/semi': ['error'], // forces semicolon
      '@typescript-eslint/no-unused-vars': [ // allows unused vars with explicit underscore
        'error',
        { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_', 'caughtErrorsIgnorePattern': '^_' },
      ],
    }
  }
];
