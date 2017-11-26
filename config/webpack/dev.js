import path from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import AssetsPlugin from 'assets-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const entry = {
  desktop: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/client/desktop.js',
  ],
  phone: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/client/phone.js',
  ],
}

export const output = {
  path: '/',
  filename: '[name].js',
  publicPath: '/',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      exclude: /node_modules\/(?!avrs-ui)/,
      use: [
        {
          loader: 'react-hot-loader/webpack',
        },
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['es2015', { modules: false }],
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
              ['react-intl', {
                messagesDir: path.join(__dirname, '../../locales/messages/'),
              }],
            ],
          },
        },
      ],
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
      use: 'file-loader?name=[name].[ext]',
    },
    {
      test: /\.po$/,
      use: path.join(__dirname, 'loader/po-loader.js'),
    },
  ],
}

export const resolve = {
  plugins: [
    new CssResolvePlugin(),
  ],
}

export const plugins = [
  new AssetsPlugin({
    path: path.join(__dirname, '../../build'),
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          jssGlobal(),
          jssNested(),
          jssCamelCase(),
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
