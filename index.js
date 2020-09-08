var express = require('express');

var app = express();

var port = process.env.port || 3000;

var path = require('path');

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/snap.svg.html'));
});

app.listen(port, function(){
    console.log('server is running on :' + port);
});

app.use(express.static(__dirname + '/public'));