const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs', {
    items: list,
  });
});

const list = ['Hola', 123, 'jaedkj', 'gym', 'eadañslk'];
app.post('/', (req, res) => {
  const postedItem = req.body.item;
  list.push(postedItem);

  res.render('index.ejs', { items: list });
});

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
