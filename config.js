/**
 * Created by raghavan on 7/6/17.
 * @description: configuration file
 */
const path = require('path');
const packageJSON = require('./package.json');

let APP_DIR = path.join(__dirname, 'src/app'),
    BUILD_DIR = path.join(__dirname, 'public');
let config = {
    name: packageJSON.name,
    version: packageJSON.version,
    directories: {
        application: APP_DIR,
        build: BUILD_DIR,
        publicDir: path.join(__dirname, 'public'),
        images: path.join(__dirname, 'src/images'),
        template: path.join(__dirname, 'src/templates')
    },
    files: {
        entryFile: 'index.jsx',
        buildFile: 'bundle.js',
        template: 'template.html',
        favicon: 'favicon.ico'
    },
    ssl: {
        enabled: true,
        key: path.join(__dirname, 'server', 'key.pem'),
        cert: path.join(__dirname, 'server', 'cert.pem')
    },
    server: {
        port: 3000,
        contextPath: "/main",
        assetsPath: {
            images: "/images"
        }
    },
    session: {
        name: 'undefined',
        secret: 'untold-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: '/'
        }
    },
    bodyParser: {
        json: {
            limit: '10mb'
        },
        text: {
            limit: '10mb'
        },
        urlencoded: {
            extended: true,
            limit: '10mb'
        }
    }
};

module.exports = config;