import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

let userIsAuthorised = false;

const checkPassword = (req, res, next) => {
  const password = req.body.password;
  userIsAuthorised = password === 'ILoveProgramming';
  next();
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkPassword);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
  userIsAuthorised
    ? res.sendFile(__dirname + '/public/secret.html')
    : res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
  console.log('Server running at port 3000');
});
