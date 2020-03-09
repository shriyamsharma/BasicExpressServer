const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res, next) => {
    res.end('will send all the dishes to you!');
})

.post((req, res, next) => {
    res.end('Will add the dishe: ' + req.body.name + ' with the details: ' + req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT opertation not suported on /dishes');
})

.delete((req, res, next) => {
    res.end('Deleting all the dishes.');
});

module.exports = dishRouter;