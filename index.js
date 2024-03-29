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

// DELETE endpoint to delete a task by id
app.delete('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

// PUT endpoint to update a task by id
app.put('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let found = false;

  tasks = tasks.map(task => {
    if (task.id === id) {
      found = true;
      return { ...task, content: req.body.content };
    }
    return task;
  });

  if (found) {
    res.status(200).send();
  } else {
    res.status(404).send('Task not found');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Todo App!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
