const path = require('path');
const HtmlwebpackPlugins = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new HtmlwebpackPlugins({
        title:'Restaurant page',
        template:'./src/inedx.html'
    })
  ]
};