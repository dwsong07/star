module.exports = {
    extends: ["airbnb-typescript-prettier"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-console": "off",
    },
    env: {
        jest: true,
    },
};
