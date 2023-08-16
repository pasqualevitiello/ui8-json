const fs = require('fs');

exports.handler = function (event, context) {
  try {
    const data = fs.readFileSync('./data.json');
    const jsonData = JSON.parse(data);

    return {
      statusCode: 200,
      body: JSON.stringify(jsonData)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Error retrieving JSON data'
    };
  }
};
