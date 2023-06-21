const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const n1 = Number(req.body.n1);
  const n2 = Number(req.body.n2);
  res.send(`<p>Your result is ${n1 + n2}</p> <a href="/">Go back</a>`);
});

app.listen(3000, () => {
  console.log('Server running in port 3000');
});
