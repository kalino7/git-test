
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = "localhost";
const port = process.env.PORT || 3000;

const server = http.createServer( (req, res)=>{
    
    //to display the headers info
    // console.log(req.headers);

    console.log(`url: ${req.url} \n Method: ${req.method}`);

    if(req.method == 'GET')
    {
        var fileUrl;

        if(req.url == '/') fileUrl = '/home.html';
        else fileUrl = req.url;

        //find the absolute path of that file
        var filePath = path.resolve('./http/public/'+fileUrl);
        var fileExt = path.extname(filePath);

        if(fileExt == '.html')
        {
            //takes 2 arg. 1st is the file path, 2nd a call back fxn
            fs.exists(filePath, (exists) => {
                
                if(!exists)
                {
                    res.statusCode = 404;
                    res.setHeader('content-type', 'text/html');
                    res.end('<html><body><h1> Error: '+ fileUrl +' page not found </h1></body></html>');
                    
                    return;
                }

                res.statusCode = 200;
                res.setHeader('content-type', 'text/html');
                //takes the file and loads into thes res.body
                //this displays the file
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else
        {
            //fiile isnt .html format
            res.statusCode = 404;
            res.setHeader('content-type', 'text/html');
            res.end('<html><body><h1> Error: '+ fileUrl +' is not an html page </h1></body></html>');
            
            return;
        }

    }
    else
    {
        //req.method format not supported yet
        res.statusCode = 404;
        res.setHeader('content-type', 'text/html');
        res.end('<html><body><h1> Error: '+ req.method +' is not supported </h1></body></html>');

        return;
    }

    //response msg code
    // res.statusCode = 200;

    // res.setHeader('content-type', 'text/html');

    // res.end('<html><body><h1>Hello, World</h1></body></html>');

});

//start up the server using the http format
//quite different from using express
server.listen(port, hostname, ()=>{
    console.log(`server running at port: ${port} and hostname: ${hostname}`);
});