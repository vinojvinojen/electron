const { exec } = require('child_process');

const urlToOpen = 'http://locks_us.surge.sh/';
// const urlToOpen = 'http://localhost:3000';

const command = `start ${urlToOpen}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening URL: ${error}`);
    return;
  }
  console.log(`Opened ${urlToOpen} in the default web browser`);
});
