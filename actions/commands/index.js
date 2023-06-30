const scanCommand = () => ({
    command: '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport',
    args: ['--scan']
  });

const connectCommand = ({ interface, ssid, password }) => ({
    command: '/usr/sbin/networksetup',
    args: ['-setairportnetwork', interface, ssid, password]
})

const disconnectCommand = ({interface}) => ({
    command: '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport',
    args: [interface, '-z']
})

const powerToggleCommand = ({ value }) => ({
    command: '/usr/sbin/networksetup',
    args: ['-setairportpower', 'Wi-Fi', value]
})

const currentConnectionCommand = () => ({
    command: '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport',
    args: ['--getinfo']
})


module.exports = {
    scanCommand,
    connectCommand,
    disconnectCommand,
    powerToggleCommand,
    currentConnectionCommand
}