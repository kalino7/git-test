
const http = require('http');

const hostname = "localhost";
const port = process.env.PORT || 3000;

const server = http.createServer( (req, res)=>{
    //to display the headers info
    console.log(req.headers);

    //response msg code
    res.statusCode = 200;

    res.setHeader('content-type', 'text/html');

    res.end('<html><body><h1>Hello, World</h1></body></html>');

});

//start up the server using the http format
//quite different from using express
server.listen(port, hostname, ()=>{
    console.log(`server running at port: ${port} and hostname: ${hostname}`);
});