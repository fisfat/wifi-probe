const { execFile } = require('child_process');
const env = require('../env');

module.exports = ({ command, args }) =>
  new Promise((resolve, reject) => {
    execFile(command, args, { env }, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });