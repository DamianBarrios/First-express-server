const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.ejs')
});

router.get('/login', (req, res ) => {
    res.render('login') 
})

router.get('*', (req, res) => {
    res.writeHead(404, {'Content-type': 'text/html'})
    res.write('<h1>Not Found</h1>')
    
})

module.exports = router;