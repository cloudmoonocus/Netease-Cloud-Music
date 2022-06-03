const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    productionSourceMap: false,
    transpileDependencies: true,
    // 关闭打包时生成map文件
    productionSourceMap: false,
    // 关闭语法检测
    lintOnSave: false,
    // 代理服务器（跨域）
    // devServer: {
    //     proxy: {
    //         '/': {
    //             target: 'https://neteasecloudmusic-six.vercel.app',
    //         },
    //     },
    // },
});
