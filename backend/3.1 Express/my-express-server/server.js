const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<p>Contact me at: arrativeltomas@gmail.com</p>');
});

app.get('/about', (req, res) => {
  res.send(
    '<h1>I am Tomás arrativel</h1> <p>I am a Fullstack web developer</p>',
  );
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
