//jshint esversion:6

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  const today = new Date();
  const curDay = today.getDay();

  var day = ``;

  if (today.getDay === 6 || today.getDay === 0) {
    day = `weekend: ${days[curDay]}`;
  } else {
    day = `weekday: ${days[curDay]}`;
  }

  res.render('list', { kindOfDay: day });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
