const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

// GET endpoint to retrieve all tasks
app.get('/task', (req, res) => {
  res.json(tasks);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Todo App!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
