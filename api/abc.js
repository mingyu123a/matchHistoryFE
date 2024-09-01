// api/abc.js
const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'riot.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(data);
  });
}
