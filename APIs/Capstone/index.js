// Lorem picsum
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const API_URL = 'https://picsum.photos/600';

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
  try {
    
 res.render('index.ejs');
  } catch (error) {
    console.error(error);
  }
});

app.post('/img', async (req, res) => {
  try {
    let result
    if (req.body.grayscale && req.body.blur > 0)return  result = `${API_URL}?grayscale&blur=${req.body.blur}`;
    else if (req.body.grayscale) return result = `${API_URL}?grayscale`;
    else if (req.body.blur > 0) return result = `${API_URL}?blur=${req.body.blur}`;
    else result = API_URL;

    res.render('index.ejs', { img: result });
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
