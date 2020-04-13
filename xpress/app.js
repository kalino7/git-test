
const express = require('express');

const hostname = 'localhost';

const port = process.env.PORT || 3000;

const app = express();

app.use((req, res, next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1>THis is a html page</h1></body></html>');
});


app.listen(port, hostname, ()=>{
    console.log('server is live');
});