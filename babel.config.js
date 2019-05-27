module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": false,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ]
}
