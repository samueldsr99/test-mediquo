// eslint-disable-next-line no-undef
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [
    "prettier",
    "react-refresh",
    "@typescript-eslint",
    "simple-import-sort",
  ],
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  rules: {
    camelcase: 2,
    "@typescript-eslint/no-var-requires": 0,
    "prettier/prettier": "warn",
    "no-console": "warn",
    "prefer-const": "warn",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"],
        ],
      },
    ],
  },
  overrides: [{ files: ["*.config.js", "*.config.cjs"], env: { node: true } }],
};
