const htmlmin = require('html-minifier')

module.exports = function (config) {
    config.addPassthroughCopy('src/assets/img')
    config.addPassthroughCopy('src/assets/js')
    config.addPassthroughCopy('src/_redirects')

    config.addTransform('htmlmin', (content, outputPath) => {
        if (outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
            return content
        }
    })

    return {
        dir: {
            input: './src',
            output: './build',
            includes: '_includes',
            layouts: '_layouts'
        },
        passthroughFileCopy: true
    }
}
