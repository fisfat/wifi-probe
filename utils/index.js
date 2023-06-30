const execute = require('./executor')
const parser = require('./parser')
const { Logger } = require('./logger')

const returnMySsids = (scanResult) => {
    const mySsidsSmallLetter = scanResult.filter((result) => result.ssid.includes('fisfat'))
    const mySsidsCapitalLetter = scanResult.filter((result) => result.ssid.includes('Fisfat'))
    return [...mySsidsSmallLetter, ...mySsidsCapitalLetter]
}
const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = {
    execute,
    parser,
    returnMySsids,
    delay,
    Logger
}