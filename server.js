const express = require('express');
const compression = require('compression')
const app = express();
const api = require('./api');
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
            res.sendFile('index.html');
    };
    res.redirect('https://' + req.hostname + req.url)
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