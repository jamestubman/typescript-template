module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "no-unused-vars": "warn",
        "react/forbid-prop-types": "off",
        "func-names": "off",
        "wrap-iife": "off",
        "import/first": "off",
        "no-param-reassign": "off",
        "no-async-promise-executor": "off",
        "prefer-promise-reject-errors": "off",
        "no-nested-ternary": "off",
        "no-use-before-define": "off",
        "no-prototype-builtins": "off",
        "no-shadow": "off",
        "comma-dangle": "off",
        "arrow-parens": ["error", "as-needed"],
        "consistent-return": "off",
        "no-console": "warn",
        "linebreak-style": "off",
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"],
            },
        ],
        semi: ["error", "never"],
        quotes: ["error", "double"],
        "max-len": [
            "error",
            {
                code: 120,
            },
        ],
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: [
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild",
                ],
                ignoreComments: false,
            },
        ],
        "react/jsx-wrap-multilines": "off",
        "arrow-body-style": "warn",
        "react/jsx-closing-tag-location": "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/display-name": "off",
        "no-multi-spaces": "warn",
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    },
}
