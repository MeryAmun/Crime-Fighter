//Remember to create new git repo Crime Fighter

var express = require('express');
var app = express()
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
  res.render('index')
});
app.get('/contact', function(req, res){
  var emergency = [
    {unit: ' Police', location: 'Old Town', contact: 118},
  {unit: ' Hospital', location: 'Molyko ', contact: 117},
  {unit: ' Fire Brigard', location: 'Mulang ', contact: 119},
  {unit: ' Social service', location: 'Fiango ', contact: 113}
]
  res.render('contact',{emergency: emergency});
  });

app.get('/profile/:name', function(req, res){
  var socials = [
    {unit: ' Police', location: 'Old Town', contact: 118},
  {unit: ' Hospital', location: 'Molyko ', contact: 117},
  {unit: ' Psychologist',  contact: 129},
  {unit: ' Social service', location: 'Fiango ', contact: 113}
]
  res.render('profile', {person: req.params.name, emergency: emergency});
});


app.listen(3500);
console.log('crime fighter is live on port 3500, (* _ *) you');
