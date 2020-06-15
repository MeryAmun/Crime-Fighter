//Remember to create new git repo Crime Fighter

var express = require('express');
var app = express()
app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});
app.get('/contact', function(req, res){
  res.sendFile('/contact.html')
});
app.get('/profile/:name', function(req, res){
  res.render('profile');
});


app.listen(3500);
console.log('crime fighter is live on port 3500, (* _ *) you');
