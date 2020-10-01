const express = require('express');
const morgan = require('morgan');
const app = express();

//requiring routes
const routes = require('./routes');
const routesApi = require('./routes-api')

//Settings
app.set('appName', 'First Server');
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

// morgan 
/* app.use(morgan('dev'));
app.use(morgan('short'));
app.use(morgan('combined')); */

//routes
app.use(routes);
app.use(routesApi);
app.get('*', (req, res) => {
    res.writeHead(404, {'Content-type': 'text/html'})
    res.write('<h1>Not Found</h1>')
    
})

app.listen(3000, () => {
    console.log("Server on port 3000");
    console.log('App name: ', app.get('appName'));
})

