module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "airbnb",
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "global-require": "off",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ],
    "react/no-unused-prop-types": ["warn"],
    "react/jsx-boolean-value": "off",
    "react/forbid-prop-types": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "import/no-cycle": "off"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  }
};
