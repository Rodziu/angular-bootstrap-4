const path = require('path');

module.exports = {
    resolve: {
        modules: [
            path.join(process.cwd(), 'dist'),
            'node_modules'
        ],
        alias: {
            'angular-bootstrap4': 'dist/fesm2015/angular-bootstrap4.js'
        }
    },
}
