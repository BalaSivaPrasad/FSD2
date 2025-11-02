const express = require('express');
const app = express();
const PORT = 3000;

app.get('/home', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
