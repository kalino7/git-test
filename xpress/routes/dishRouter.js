
const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all( (req, res, next)=>{
        //this runs for every req made whether get, put, post, delete
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');

        //now you need the next fxn to jump into the actual req that was made
        //if it was get, it jumps to get, if it was post it jumps to post etc

        next();
    })
   .get( (req, res, next)=>{
        //next isn't actually needed here
        //because of the previous jump call made from all(), it jumped with set values
        //like the statuscode and the Headers are already set

        res.end('Will display all the dishes');
    })
    .post( (req, res, next)=>{
        //certain values already set
        //the post msg body will contain name and description values
        res.end("will add vallues to: " +
            req.body.name+" with description: "+ 
                req.body.description);
    })
    .put( (req, res, next)=>{
        //certain values already set
        //403 means operation not supported
        res.statusCode = 403;
        res.end('Put Operation not supported');
    })
    .delete( (req, res, next)=>{
        //certain values already set
        res.end('Deleting all the dishes');
    });

dishRouter.route('/:dishID')
    .get( (req, res, next)=>{
        //next isn't actually needed here
        //because of the previous jump call made from all(), it jumped with set values
        //like the statuscode and the Headers are already set

        res.end('Will display the dish with ID: '+ req.params.dishID);
    })
    .post( (req, res, next)=>{
        //certain values already set
        res.statusCode = 403;
        res.end('Operation not supported');
    })
    .put( (req, res, next)=>{
        //certain values already set
        res.end('We will update dishes details with ID: ' + req.params.dishID);
    })
    .delete( (req, res, next)=>{
        //certain values already set
        res.end('Deleting the dish with ID: '+ req.params.dishID);
    });

    module.exports = dishRouter;