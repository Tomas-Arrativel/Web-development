import express from 'express';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  const date = new Date().getDay();
  let dateDay = 'Weekday',
    advice = "it's time to work hard";

  if (date === 0 || date === 6) {
    dateDay = 'Weekend';
    advice = "it's time to have some fun";
  }

  res.render('index.ejs', {
    dateDay: dateDay,
    advice: advice,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
