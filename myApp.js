let express = require('express');
let app = express();
// require('dotenv').config();


app.use(function(req, res, next){
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
});



// challenge 4 
app.use('/public',express.static(__dirname + '/public'))


// challenge 3
app.get('/', 
    function(req, res)
    {
        absolutePath = __dirname +  '/views/index.html'
        res.sendFile(absolutePath);
    })

// challenge 5
app.get('/json',
    function(req, res){
        let o = {"message": "Hello json"}
        if(process.env.MESSAGE_STYLE == "uppercase")
        {
            o.message = o.message.toUpperCase();
        }
        res.json(o)
    })



// console.log("Hello World")


// challenge 1
// app.get('/', function(req, res){res.send('Hello Express')});





























 module.exports = app;
