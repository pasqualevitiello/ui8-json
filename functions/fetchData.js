const fetch = require('node-fetch');
const fs = require('fs');

exports.handler = async function (event, context) {
  try {
    const response = await fetch('https://ui8.net/api/home');
    const data = await response.json();
    fs.writeFileSync('./data.json', JSON.stringify(data));

    return {
      statusCode: 200,
      body: 'JSON data copied successfully!'
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error copying JSON data'
    };
  }
};
