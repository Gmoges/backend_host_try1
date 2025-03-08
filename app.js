const express = require('express');
const app = express();
const port = 3000;

const data1 = process.argv[2] || 'No first data';
const data2 = process.argv[3] || 'No second data';

console.log(`Data 1: ${data1}, Data 2: ${data2}`);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});