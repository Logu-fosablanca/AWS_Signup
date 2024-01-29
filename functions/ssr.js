// functions/ssr.js

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    // Read the index.html file
    const indexHtml = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf-8');

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: indexHtml,
    };
  } catch (error) {
    console.error('Error reading index.html:', error);

    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
