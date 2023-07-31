//jshint esversion:6

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

let tasks = ['Drink water', 'Eat healthy'];

app.get('/', (req, res) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  const today = new Date();

  const day = today.toLocaleDateString('en-US', options);

  res.render('list', { kindOfDay: day, newTasks: tasks });
});

app.post('/', (req, res) => {
  let task = req.body.newTask;
  tasks.push(task);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
