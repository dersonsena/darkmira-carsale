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
    "prefer-destructuring": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ],
    "react/no-unused-prop-types": ["warn"],
    "react/jsx-boolean-value": "off",
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/no-array-index-key": ["warn"],
    "react/no-string-refs": ["warn"],
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "import/no-cycle": "off",
    "class-methods-use-this": ["warn"]
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
