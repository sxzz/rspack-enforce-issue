// @ts-check
const { VueLoaderPlugin } = require('vue-loader')
const { createWebpackPlugin } = require('unplugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { experimentalInlineMatchResource: true },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    createWebpackPlugin(() => {
      return {
        name: 'test',
        enforce: 'pre',
        transformInclude(id) {
          return id.includes('setup=true')
        },
        transform(code, id) {
          if (code.includes('HelloWorld')) {
            console.log(id)
            console.log(code)
            return code.replace('HelloWorld', 'Hello World2')
          }
        },
      }
    })(),
  ],
}
