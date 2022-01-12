const { merge }= require("webpack-merge");
const common=require("./common.config.js");

module.exports=merge(common, {
    mode: "development",
    devServer: {
        open: true
    },
    devtool: "eval-source-map",
    optimization: {
        moduleIds:"deterministic",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                }            
            }
        }
    }
})