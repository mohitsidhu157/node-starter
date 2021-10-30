const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/login', async (req, res) => {
  res.send({ message: 'Login success' });
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
