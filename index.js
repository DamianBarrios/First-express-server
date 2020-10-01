const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.get('/login', (req, res ) => {
    res.send("Login Page")
})

app.get('*', (req, res) => {
    res.writeHead(404, {'Content-type': 'text/html'})
    res.write('<h1>Not Found</h1>')
    
})

app.listen(3000, () => {
    console.log("Server on port 3000")
})

