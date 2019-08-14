var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
var User = mongoose.model("User");

mongoose.model("User", UserSchema);
mongoose.connect("mongodb://localhost/basic_mongoose");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.get("/", function(req, res) {
  res.render("index");
});

app.post("/users", function(req, res) {
  console.log("POST DATA", req.body);
  var user = new User({ name: req.body.name, age: req.body.age });

  User.find({}, function(err, users) {});

  user.save(function(err) {
    if (err) {
      console.log("something went wrong");
    } else {
      console.log("successfully added a user!");
    }
    res.redirect("/");
  });
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
});
