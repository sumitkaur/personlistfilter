

const express = require('express');
const  app = express();
app.listen(process.env.PORT || 3000);
const path = require('path');
app.use(express.static(__dirname + '/dist/PersonListFilter'));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/PersonListFilter/index.html'));
});