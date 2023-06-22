const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const query = req.body.countryName;

  const apiKey = 'e3d4171853234c9e8f4120353232206';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`;
  https.get(url, (response) => {
    console.log(`Status code: ${response.statusCode}`);

    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.current.temp_c;
      const condition = weatherData.current.condition.text;
      const img = weatherData.current.condition.icon;

      res.write(`<h1>The temperature in ${query} is ${temp}</h1>`);
      res.write(`<img src="${img}" />`);
      res.write(`<p>${condition}</p> <a href="/">Try another country</a>`);
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
