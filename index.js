const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];
let nextId = 1;

// GET endpoint to retrieve all tasks
app.get('/task', (req, res) => {
  res.json(tasks);
});

// POST endpoint to create a new task
app.post('/task', (req, res) => {
  const task = {
    id: nextId++,
    content: req.body.content,
  };
  tasks.push(task);
  res.status(201).json(task);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Todo App!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
