const express = require('express');

const app = express();
app.listen(9000, () => {
    console.log(`Serveris paleistas. Laukia užklausų`);
});

const books = [
    'Alchemikas',
    'Star wars',    
    'Game of throns'
        
]
app.get('/books/:from/:to', (request, response) => {

    response.json(books.slice(request.params.from, request.params.to));
    console.log('grazinam knygas')
});
