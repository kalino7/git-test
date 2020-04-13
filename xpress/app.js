
const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';

const port = process.env.PORT || 3000;

const app = express();

//morgan logs header infos into the console
app.use(morgan('dev'));

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