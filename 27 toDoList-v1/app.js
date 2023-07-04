//jshint esversion:6

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const today = new Date();
  if (today.getDay === 6 || today.getDay === 0)
    res.send('Yayy its the weekend!');
  else res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
