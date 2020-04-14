
const express = require('express');
const morgan = require('morgan');

//body parser passes the msg from the req.body
//it gets installed automatically once you install express
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = express();

//morgan logs header infos into the console
app.use(morgan('dev'));

//run the body-parser middleware
//.json means it will be able to read in json files
//and be added to req.body
app.use(bodyParser.json());


//use any of the express route processes
//either all(), get(), post() etc...

//all() signifies the condition will run for every request method made
app.all('/dishes', (req, res, next)=>{
    //this runs for every req made whether get, put, post, delete
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');

    //now you need the next fxn to jump into the actual req that was made
    //if it was get, it jumps to get, if it was post it jumps to post etc

    next();
});

app.get('/dishes', (req, res, next)=>{
    //next isn't actually needed here
    //because of the previous jump call made from all(), it jumped with set values
    //like the statuscode and the Headers are already set

    res.end('Will display all the dishes');
});

app.post('/dishes', (req, res, next)=>{
    //certain values already set
    //the post msg body will contain name and description values
    res.end("will add vallues to: " +
        req.body.name+" with description: "+ 
            req.body.description);
});

app.put('/dishes', (req, res, next)=>{
    //certain values already set
    //403 means operation not supported
    res.statusCode = 403;
    res.end('Put Operation not supported');
});

app.delete('/dishes', (req, res, next)=>{
    //certain values already set
    res.end('Deleting all the dishes');
});



//routes with paramete ids



app.get('/dishes/:dishID', (req, res, next)=>{
    //next isn't actually needed here
    //because of the previous jump call made from all(), it jumped with set values
    //like the statuscode and the Headers are already set

    res.end('Will display the dish with ID: '+ req.params.dishID);
});

app.post('/dishes/:dishID', (req, res, next)=>{
    //certain values already set
    res.statusCode = 403;
    res.end('Operation not supported');
});

app.put('/dishes/:dishID', (req, res, next)=>{
    //certain values already set
    res.end('We will update dishes details with ID: ' + req.params.dishID);
});

app.delete('/dishes', (req, res, next)=>{
    //certain values already set
    res.end('Deleting the dish with ID: '+ req.params.dishID);
});



//serves up my html files in the pubic folder of express
app.use(express.static(__dirname+'/public'));

app.use((req, res, next)=>{
    //console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1>THis is a html page</h1></body></html>');
});


app.listen(port, hostname, ()=>{
    console.log('server is live');
});