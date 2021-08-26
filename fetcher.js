const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');

request(args[0],(error, response, body) => {
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
  const stats = fs.statSync('./index.html');
  const n = stats.size;
  console.log(`Downloaded and saved ${n} bytes to ${args[1]}`);
});
