// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require('express');
const app = express();

app.listen(5500, () => {
    console.log('serveris paleistas!');
});

app.get('/time', (request, response) => {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();
  response.send(`${dateString} ${timeString}`);
});