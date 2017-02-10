// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://192.168.0.68:4444/wd/hub/',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'Chrome'
    },
}