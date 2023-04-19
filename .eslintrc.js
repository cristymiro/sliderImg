module.exports = {
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {},
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src'],
            },
        },
    },
}
