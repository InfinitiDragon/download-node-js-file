const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt';
const filename = 'text.txt';

const file = fs.createWriteStream(filename);

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    const data = fs.readFileSync(filename, 'utf-8');
    const lineCount = data.split('\n').length;
    console.log(`Number of lines in file: ${lineCount}`);
  });
}).on('error', (err) => {
  console.error(err);
});
