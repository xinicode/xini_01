const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // webpack相关配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', path.resolve(__dirname, './src'))
      .set('@utils', path.resolve(__dirname, './src/util'))
      .set('@components', path.resolve(__dirname, './src/components'))
  },
  // css相关配置
  css: {
    // 是否分离css（插件ExtractTextPlugin）
    extract: true,
    // 是否开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // prependData: `@import "./src/app.css";`
      }
    },
    // 是否启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // 是否使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false,
    host: 'localhost',
    port: 3300,
    https: false,
    hotOnly: false,
    // http 代理配置  
    proxy: {
      '/': {
        //代理的地址
        target: 'http://api.chenmychou.cn',
        // ws： false  webscoket 
        changeOrigin: true,
        //api重写
        pathRewrite: {
          // '^/api': ''
        }
      }
    },
    before: (app) => { }
  },
  // 第三方插件配置
  pluginOptions: {
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.mode = 'production';
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            //生产环境自动删除 console
            warnings: false,
            compress: {
              // warnings: false, // 若打包错误，则注释这行
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
    } else {
      // 开发环境
      config.mode = 'development'
    }
  }
}