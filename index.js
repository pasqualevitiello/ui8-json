const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/home', async (req, res) => {
  try {
    const response = await axios.get('https://ui8.net/api/home');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
