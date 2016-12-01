import webpack from 'webpack'
import nested from 'jss-nested'
import camelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const entry = [
  'babel-polyfill',
  'webpack-hot-middleware/client',
  'react-hot-loader/patch',
  './src/client/index.js',
]

export const output = {
  filename: 'index.js',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules\/(?!avrs-ui)/,
      options: {
        babelrc: false,
        presets: [
          'es2015',
          'stage-0',
          'react',
        ],
        plugins: [
          ['elementum-tools/lib/babel/plugin', {
            alias: {
              AvrsLanding: 'src',
              AvrsUI: 'node_modules/avrs-ui/src',
            },
            extract: true,
          }],
          'react-hot-loader/babel',
          'transform-runtime',
        ],
      },
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.jss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'jss-loader',
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const plugins = [
  new CssResolvePlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          nested(),
          camelCase(),
        ],
      },
      postcss: {
        plugins: autoprefixer({
          browsers: [
            '>2%',
            'last 2 versions',
          ],
        }),
      },
    },
  }),
]
