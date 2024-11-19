const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            path.join(__dirname, './src/index.js'),
            path.join(__dirname, './src/sass/main.scss')
        ]
    }, // Вхідний файл вашого додатка
    output: {
        filename: 'main.js', // Назва вихідного файлу
        path: path.resolve(__dirname, 'dist') // Директорія виведення
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Збірка для JavaScript файлів
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/, // Збірка для SCSS файлів
                use: [
                    MiniCssExtractPlugin.loader, // Виводить CSS у файл
                    'css-loader', // Завантажує CSS
                    'sass-loader' // Компілює SCSS у CSS
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Збірка для зображень
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images'
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css' // Назва CSS файлу
        })
    ]
};