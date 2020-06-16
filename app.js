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
  var emergency = [
    {unit: ' Police', location: 'Old Town', contact: 118},
  {unit: ' Hospital', location: 'Molyko ', contact: 117},
  {unit: ' Fire Brigard', location: 'Mulang ', contact: 119},
  {unit: ' Social service', location: 'Fiango ', contact: 113}
]
  res.render('profile', {person: req.params.name, emergency: emergency});
});


app.listen(3500);
console.log('crime fighter is live on port 3500, (* _ *) you');
