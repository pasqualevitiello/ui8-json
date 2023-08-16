const express = require('express');
const app = express();

app.get('/api/json', (req, res) => {
  try {
    const jsonData = require('./data.json');
    res.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
