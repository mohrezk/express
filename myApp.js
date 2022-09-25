let express = require('express');
let app = express();
require('dotenv').config();

// challenge 11
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

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

// challenge 8
app.get('/now',
    function(req, res, next)
    {
        req.time = new Date().toString()
        next()
    },
    function(req, res)
    {
        res.json({"time": req.time})
    }
    )

// challenge 9
app.get('/:word/echo',
    function(req, res)
    {
        res.json({"echo": req.params.word})
    })
// challend 10
app.get('/name',
    function(req, res)
    {
        res.json({"name": req.query.first + " " +  req.query.last})
    }
)
app.post('/name',
    function(req, res)
    {
        res.json({"name": req.body.first + " " + req.body.last})
    }
)
// console.log("Hello World")


// challenge 1
// app.get('/', function(req, res){res.send('Hello Express')});





























 module.exports = app;
