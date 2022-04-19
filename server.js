const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>This is the main route</h1>');
});
app.get('/profile', (req, res) => {
  res.send('<h1>Getting Profile</h1>');
});
app.post('/profile', (req, res) => {
  const user = {
    name: 'Amit',
    age: '24',
  };
  res.send('<h1>Getting Profile</h1>');
});

app.listen(5000);
