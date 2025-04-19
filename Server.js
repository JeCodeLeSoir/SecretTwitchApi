const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

app.use(express.json());
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'Secret.html'));
});

app.listen(80, () => {
  console.log(`Server is running on http://localhost`);
});

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS server running on https://localhost');
});