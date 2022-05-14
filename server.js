// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

const express = require('express');
const cors = require ('cors');

const app = express();
app.use(cors());

let count = 0;
app.listen(9000, () => {
    console.log(`serveris paleistas. Užklausų skaičius: ${count}`);
});

app.get('/', (request, response) => {
  count++;
  console.log(`Užklausų skaičius: ${count}`);
  response.json(count);
 });

 