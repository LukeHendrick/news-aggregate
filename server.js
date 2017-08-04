const express = require('express');
const compression = require('compression')
const app = express();
const api = require('./api');
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res, next) => {
    if(req.headers['x-forwarded-proto'] != 'https') {
        res.redirect('https://' + req.hostname + req.url)
    } else {
        next();
    }
})

app.get('/', (req, res) => {
            res.sendFile('index.html');

})

app.get('/api/get/*', (req, res) => {
    let source = req.query.source;
    api.newsGet(source).then((data) => {
        res.send(data.articles);
    })
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});