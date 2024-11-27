const express = require('express');
const countStudents = require('./3-read_file_async'); // Import the function from Task 3

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.status(500).send('Database file not provided');
    return;
  }

  let response = 'This is the list of our students\n';
  try {
    const data = await countStudents(database);
    response += data;
  } catch (error) {
    response += error.message;
  }
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

