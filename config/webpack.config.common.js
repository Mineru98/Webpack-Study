const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    /* 번들링 할 대상 */
    // 하나의 파일인 경우
    // entry: "./src/index.js",
    // 여러개의 파일인 경우
    entry: {
        index: "./src/index.js",
        about: "./src/about.js",
    },
    /* 내보내기 */
    output: {
        /* 내보내기 파일 이름 형태 */
        // filename: "bundle.js",
        // filename: "[id]_bundle.js",
        // filename: "[hash].bundle.js",
        // filename: "[chunkhash].bundle.js",
        // filename: "[name].[hash].bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "..", "public"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "./about.html",
            chunks: ["about"],
        }),
    ],
};
