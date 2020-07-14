const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

 
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: "[name].bundle.js",
    chunkFilename:"[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    
    publicPath: "/"
   
  },
  module: {

   
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
             test: /\.(png|jpg|gif)$/i,
                 use: {
                   loader: "url-loader",
                    options: {
                     limit: 8192,
                      name: "static/media/[name].[hash:8].[ext]"
                             }
                     }
        }
      
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
  
};