const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(__dirname, 'src/'))
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [
                path.resolve(__dirname, 'src/scss/abstracts/*.scss'),
            ]
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/portfolio/'
        : '/'
}
