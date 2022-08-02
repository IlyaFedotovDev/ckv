// webpack 5 version
const path = require('path');
const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { Directory, Path } = require('./path.config.js');

module.exports = (env) => {
    const isDev = env.dev;
    const isProd = !isDev;
    const isTest = env.test;
    const isESM = env.esm;
    const isAnalisis = env.stat;

    function filename(ext) {
        const e = ext ? ext : 'ext';
        return isDev ? `[name].${e}` : `[name].[contenthash:8].${e}`;
    }

    function chunkFilename(ext) {
        const e = ext ? ext : 'ext';
        return isDev
            ? `[name].[id].chunk.${e}`
            : `[name].[id].[contenthash:8].chunk.${e}`;
    }

    const libraryConfig = {
        umd: {
            output: {
                library: {
                    name: 'CKV',
                    type: 'umd',
                    export: 'default',
                    umdNamedDefine: true,
                },
            },
        },
        esm: {
            output: {
                library: {
                    type: 'module',
                },
            },
            experiments: {
                outputModule: true,
            },
        },
    };

    const plugins = [];

    if (isDev || isTest) {
        plugins.push(
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(Path.entry.static, 'index.html'),
            }),
        );
        plugins.push(
            new ESLintPlugin({
                extensions: ['js', 'ts'],
                fix: true,
            }),
        );
    }

    if (isAnalisis) {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: path.join(Path.output.stats, 'index.html'),
            }),
        );
    }

    const commonConfig = {
        mode: isDev ? 'development' : 'production',
        context: Path.entry.root,
        entry: './index.ts',
        output: {
            path: Path.output.root,
            filename: 'ckv.js',
            chunkFilename: chunkFilename('js'),
            assetModuleFilename: path.join(Directory.output.asset, filename()),
            clean: isDev || isTest ? true : false,
        },
        devtool: isDev ? 'eval-source-map' : false,

        optimization: {
            moduleIds: 'deterministic',
        },

        resolve: {
            extensions: ['.ts', '...'],
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: path.resolve('tsconfig.json'),
                }),
            ],
        },

        devServer: {
            static: [
                {
                    directory: Path.output.root,
                },
                {
                    directory: path.resolve(Directory.entry.static, 'video'),
                    publicPath: '/video',
                },
            ],
            hot: isDev,
            compress: true,
            port: 9000,
            open: true,
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'ts-loader'],
                },
            ],
        },

        plugins: plugins,
    };

    const esmConfig = _.merge(libraryConfig.esm, commonConfig);
    esmConfig.output.filename = 'ckv.esm.js';

    const umdConfig = _.merge(libraryConfig.umd, commonConfig);

    if (isDev) {
        return umdConfig;
    }

    if (isProd) {
        if (isAnalisis) {
            if (isESM) {
                return esmConfig;
            } else {
                return umdConfig;
            }
        }

        if (isTest) {
            return umdConfig;
        }

        return [esmConfig, umdConfig];
    }
};
