const path = require('path')

module.exports = {
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
            { find: /^@vue\/composition-api$/, replacement: '@vue/composition-api/dist/vue-composition-api.mjs' }
        ]
    }
}