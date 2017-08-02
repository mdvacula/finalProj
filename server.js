var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var logger = require("morgan");
var session = require("express-session");
var mongoose = require("mongoose");

mongoose.Promise = Promise;

var passport = require("./config/passport");

var app = express();

var PORT = process.env.PORT || 3001;

//Middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vmd.api+json"}));

app.use(express.static("public"));

app.use(session({secret: "spotigraphical", resave: true, saveUnitialized: true}));
app.use(passport.initialize());
app.use(passport.session());


//Databse Config
mongoose.connect('mongodb://localhost/finalProj');
var db = mongoose.connection;


//Routes for now
app.get("/*", function(req,res) {
  console.log(req.user);
  res.sendFile(__dirname + "./index.html");
});

//Route for spotify authentication
app.get('/auth/spotify',
  passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: false}),
  function(req, res){

  });

//callback for spotify
app.get('/callback',
passport.authenticate('spotify', { failureRedirect: '/login'}),
function(req, res) {
  res.send("success");
});

//log user out
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//listening
app.listen(PORT, function(){
  console.log("app listening on Port " + PORT);
});
