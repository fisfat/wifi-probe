const speedTest = require('fast-speedtest-api')

module.exports = new speedTest({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: speedTest.UNITS.Mbps // default: Bps
});