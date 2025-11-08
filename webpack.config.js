export default {
    mode: 'production',
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        ]
}}