
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3002, console.log('Listening on port 3002'));
