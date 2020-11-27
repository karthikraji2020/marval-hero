const express = require('express');

const app = express();

app.use(express.static('./dist/heros'));
app.use(express.json());

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/heros/'}),
);

app.listen(process.env.PORT || 8080);