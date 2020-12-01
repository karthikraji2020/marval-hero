const express = require('express');

const app = express();

app.use(express.static('./dist/marvel-heros'));
app.use(express.json());

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/marvel-heros/'}),
);

app.listen(process.env.PORT || 8080);