const { execute, parser, returnMySsids, delay, Logger } = require('../utils')
const { scanCommand, currentConnectionCommand, connectCommand } = require('./commands')
const env = require('../env');
const { speedTest } = require('../network')
const logger = new Logger({text: "Initiating Process"})
const logger2 = new Logger({text: "Initiating Process"})

const getSsids = async () => {
    const response = await execute(scanCommand())
    return returnMySsids(parser(response))
}

const verifyConnection = async ({ connection }) => {
    const response = await execute(currentConnectionCommand())
    const currentConnection = response.split('\n')[12].trim().split(':')[1].trim()
    return connection === currentConnection
}

const connect = async ({ interface, ssid, password }) => {
    const response = await execute(connectCommand({ interface, ssid, password }))
    return await verifyConnection({ connection: ssid })
}

const getFastest = (obj) => {
    const speedValue = Math.max(...Object.values(obj))
    const fastestSsid = Object.keys(obj).find(key => obj[key] === speedValue);
    console.log(obj, speedValue, fastestSsid)
    return {
        speedValue,
        fastestSsid
    }
}


const fireUp = async () => {
    logger.initiate()
    logger.updateOra("Getting SSIDs", 'yellow')
    const profiles = await getSsids()
    logger.updateOra(`Found ${profiles.length} WiFi networks you own`, 'yellow')
    await delay(1000)
    let resultObj = {}
    for (const profile of profiles) {
        let config = {
            interface: 'en0',
            ssid: profile.ssid,
            password: env.PASSWORD
        }
        logger.updateOra(`Attempting to connect to ${profile.ssid}`, 'yellow')
        let isConnected = await connect({ ...config })
        if (isConnected) {
            logger.updateOra(`connected to ${profile.ssid}`, 'green')
            logger.succeed();
            await delay(5000)
            logger.initiate()
            logger.updateOra(`Starting Speed Test for ${config.ssid}`, 'yellow')
            speedTest.getSpeed().then(s => {
                logger.updateOra(`Speed: ${s.toFixed(2)} Mbps`, 'green');
                logger.succeed(`Speed: ${s.toFixed(2)} Mbps`);
                resultObj[profile.ssid] = Number(s.toFixed(2))
              }).catch(e => {
                logger.succeed(`< 1 Mbps`)
                resultObj[profile.ssid] = 0
              });
        }
        logger.succeed()
        await delay(25000)
    }
    console.log("\n")
    console.table(resultObj)
   const result = getFastest(resultObj)
   logger.initiate()
   logger.updateOra(`Found ${result.fastestSsid} to be the fastest with ${result.speedValue} and connecting to it`, 'green')
   const connection = await connect({ interface: 'en0', ssid: result.fastestSsid, password: env.PASSWORD })
   if (connection) logger.succeed(`Connected to ${result.fastestSsid}. Exiting.....`)
    logger.stop()
}

module.exports = { fireUp }

