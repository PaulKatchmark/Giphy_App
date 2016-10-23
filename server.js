const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favorite = require('./routes/favorite.js');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.use('/favorite', favorite);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
var port = 3000;
var server = app.listen(port, function() {
    console.log('Listening on port ', server.address().port);
});
