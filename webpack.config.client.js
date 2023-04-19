const path = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: 'browser',
    // mode: 'production',
    devtool: 'eval-source-map',
    entry: [
        path.join(CURRENT_WORKING_DIR, 'src/index.js'),
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // To bundle image assets so that other JS code can also access
            // and load it other than the component in which it was imported into.
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
};

module.exports = config;
