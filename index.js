const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

//  routing for /dishes
// app.get('/dishes', (req, res, next) => {
//     res.end('will send all the dishes to you!');
// });

// app.post('/dishes', (req, res, next) => {
//     res.end('Will add the dishe: ' + req.body.name + ' with the details: ' + req.body.description);
// });


// app.put('/dishes', (req, res, next) => {
//     res.statusCode = 403;
//     res.end('PUT opertation not suported on /dishes');
// });

// app.delete('/dishes', (req, res, next) => {
//     res.end('Deleting all the dishes.');
// });

// routing for /dishes:
// app.get('/dishes/:dishId', (req, res, next) => {
//     res.end('will send details of the dish: ' + req.params.dishId + ' to you!');
// });

// app.post('/dishes/:dishId', (req, res, next) => { 
//     res.statusCode = 403;
//     res.end('POST opertation not suported on /dishes/' + req.params.dishId);
// });


// app.put('/dishes/:dishId', (req, res, next) => {
//     res.write('Updating the dish: ' + req.params.dishId);
//     res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description)
//     // res.end('Will update the dish: ' + req.params.dishId);
// });

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting dish: ' + req.params.dishId);
// });


app.use('/dishes', dishRouter);

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>')
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

