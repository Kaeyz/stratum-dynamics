/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "next",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["import", "tailwindcss"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "prettier/prettier": "error",
    "no-use-before-define": "error",
    "import/first": "error",
    "tailwindcss/enforces-shorthand": "off",
    "no-trailing-spaces": "warn",
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error",
    "no-irregular-whitespace": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
      },
    ],
  },
};
