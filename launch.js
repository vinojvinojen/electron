const { exec } = require('child_process');
const open = require('open');

// Specify the URL of your React app
const appUrl = 'http://localhost:3000';

// Open the default web browser
open(appUrl);

// For Windows, you can uncomment the following line to use the default browser
// exec(`start ${appUrl}`);
