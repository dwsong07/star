module.exports = {
    extends: ["airbnb-typescript-prettier"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-console": "off",
        "@typescript-eslint/no-unused-vars": "warn",
    },
    env: {
        jest: true,
    },
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
};
