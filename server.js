const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>This is the main route</h1>');
});
app.get('/profile', (req, res) => {
  res.send('<h1>Getting Profile</h1>');
});
app.post('/profile', (req, res) => {
  console.log(req.body);
  const user = {
    name: 'Amit Patial',
    age: '25',
  };
  res.send('<h1>Getting Profile</h1>');
});

app.listen(5000);
