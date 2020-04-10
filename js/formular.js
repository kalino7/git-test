
var rectangle = (x , y) => {
   return x + y;
}

var triangle = (b, h) => {
    return (0.5 * b) * h;
}

//callback square

const sqr = (l, w, callback) => {
    
    setTimeout( ()=>{

        if(l < 0 || w < 0)
        {
            callback( new Error('Can\'t Produce Square of negative value'), null);
        }
        else
        {
            callback(null, (l * w) );
        }

    }, 2000);

}

module.exports = {
    rectangle,
    triangle,
    sqr
}