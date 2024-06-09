import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

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
    },
  },
  // Overrides for client folder with React
  {
    files: ['client/app/**/*.{js,jsx}'],
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    ...pluginReactConfig,
    rules: {
      'quotes': ['error', 'single'], // enforce single quotes
      'comma-dangle': 'off', // allows no comma dangle
      'semi': ['error'], // forces semicolon
      'no-unused-vars': [ // allows unused vars with explicit underscore
        'error',
        { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_', 'caughtErrorsIgnorePattern': '^_' },
      ],
      'react/react-in-jsx-scope': 'off', // Not needed if using React 17+
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
];
