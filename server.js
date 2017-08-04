const express = require('express');
const compression = require('compression')
const app = express();
const api = require('./api');
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.get('/api/get/*', (req, res) => {
    console.log(req);
    let source = req.query.source;
    console.log(source);
    api.newsGet(source).then((data) => {
        res.send(data.articles);
    })
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});