const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
    // 参考：https://ics.media/entry/16329/#webpack-ts-react
    // モード値をproductionに設定すると最適化された状態で、
    // developmentに設定するとソースマップ有効（コンパイルされる前のJSを保持することでデバッガーを有効にできる）でJSファイルが出力される
    mode: MODE,
    entry: "./src/index.tsx",
    // コンパイルしたファイルの出力
    output: {
        path: `${__dirname}/dist`,
        filename: "index.js"
    },
    devServer: {
        // webサーバー設定
        // HMR ソースコードの修正をリロードせずに反映させることができる
        hot: true,
        host: '0.0.0.0',
        port: '3001',
        // index.htmlにアクセス
        // npx webpack-dev-server
        static: './',
        open: true // webサーバー立ち上げと同時に開く
    },
    module: {
      rules: [
        // .ts or .tsx // TypeScriptのコンパイル
        {test: /\.tsx?$/, loader:'ts-loader'},
        // Sassファイルの読み込みとコンパイル
        // ビルド時.ts/tsxと共にindex.jsにまとめられる
        {
          test: /\.s[ac]ss$/i,
          use: [
            // linkタグに出力する機能
            "style-loader",
            // CSSをバンドルするための機能
            {
              loader: "css-loader",
              options: {
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,
              }
            },
            {
              loader: "sass-loader",
              options: {
                // ソースマップの利用有無
                sourceMap: enabledSourceMap,
                sassOptions: {
                  outputStyle: "compressed",
                }
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)\z/i,
          type: "./src/assets/images"
        }
      ],
  
    },
    optimization: {
      minimizer: [
        "...",
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              // Lossless optimization with custom option
              // Feel free to experiment with options for better result for you
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                // Svgo configuration here https://github.com/svg/svgo#configuration
                [
                  "svgo",
                  {
                    plugins: [
                      {
                        name: "preset-default",
                        params: {
                          overrides: {
                            removeViewBox: false,
                            addAttributesToSVGElement: {
                              params: {
                                attributes: [
                                  { xmlns: "http://www.w3.org/2000/svg" },
                                ],
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              ],
            },
          },
        }),
      ],
    },  
    // importで利用できるようにする
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".sass", ".css"]
    },
    // ES5(IE11等)向けの指定（webpack5以上で必須）
    target: ["web", "es5"],
};