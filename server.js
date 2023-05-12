const express = require('express');
const app = express();
const port = 3000;

// Define a list of lessons
const lessons = [
  { topic: 'math', location: 'Hendon', price: 100 },
  { topic: 'math', location: 'Colindale', price: 80 },
  { topic: 'math', location: 'Brent Cross', price: 90 },
  { topic: 'math', location: 'Golders Green', price: 120 },
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Define a route to get all lessons


app.get('/lessons', (req, res) => {
    res.json(lessons);
  });
  
  // app.get('/lesson', (req, res) => {
  //   res.json(lessons);
  // });

// Define a route to get user information
app.get('/user', (req, res) => {
  res.json({ email: 'user@email.com', password: 'mypassword' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});