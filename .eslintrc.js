module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    parser: "@babel/eslint-parser",
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            arrowFunctions: true,
        },
    },
    plugins: ["react", "prettier"],
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx"],
                paths: ["./src"],
            },
        },
    },
    rules: {
        // Existing rules
        "comma-dangle": "off",
        "function-paren-newline": "off",
        "global-require": "off",
        "import/no-dynamic-require": "off",
        "no-inner-declarations": "off",
        // New rules
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "react/display-name": "error",
        "react/prop-types": "error",
        "react/prefer-stateless-function": "error",
    },
};
