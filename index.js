const { fireUp } = require('./actions');

( async () => {
await fireUp();
process.exit(0)
})()
// const ora = require('ora')
// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);