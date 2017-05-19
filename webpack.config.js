module.exports = {
    entry: "./src/entry.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public",
        publicPath: "/"
    }
}