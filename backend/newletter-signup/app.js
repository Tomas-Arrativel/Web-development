const bodyParser = require('body-parser');
const request = require('request');
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const email = req.body.email;
  const firstName = req.body.fName;
  const lastName = req.body.lName;

  console.log(email, firstName, lastName);
});

app.listen(3000, () => {
  console.log('Server running at port 3000');
});

//api key 8a28791a7430d9f7f5ea01b99ca1ce54-us21
// The unique ID for the list 051c01ddba