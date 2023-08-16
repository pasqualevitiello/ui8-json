const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://ui8.net/api/home';
const jsonFile = 'data.json';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2));
    console.log('JSON file copied successfully!');
  } catch (error) {
    console.error('Error copying JSON file:', error);
  }
};

module.exports = fetchData;
