const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('appName', 'First Server');
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

// morgan 
/* app.use(morgan('dev'))
app.use(morgan('short'))
app.use(morgan('combined')) */


//middlewares
/* app.use(function(req,res, next) {
    console.log('request url: ' + req.url);
    next();
});

app.use( (req, res,next) => {
    console.log("Function 2");
    next();
}); */


//routes
app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/login', (req, res ) => {
    res.render('login')
})

app.get('*', (req, res) => {
    res.writeHead(404, {'Content-type': 'text/html'})
    res.write('<h1>Not Found</h1>')
    
})

app.listen(3000, () => {
    console.log("Server on port 3000");
    console.log('App name: ', app.get('appName'));
})

