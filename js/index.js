//exmaple of file based module
const formular = require('./formular');

const sqrs = formular.sqr(1, 2, (err, sum )=>{
    if(err)
    {
        //message property available from ERROR object
        console.log(err.message);
    }
    else{
        console.log(`Result: ${sum}`);
    }

});

const rec = formular.rectangle(4,6);

var tri = formular.triangle(12, 5);

console.log(`Area of Rectangle is: ${rec} \n Area of Triangle is ${tri}`);
