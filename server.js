// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require('express');
const app = express();
let count = 0;
app.listen(9000, () => {
    console.log(`serveris paleistas. Užklausų skaičius: ${count}`);
});

app.get('/', (request, response) => {
  count++;
  response.send(`Užklausų skaičius: ${count}`);
 });

 