var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

// app.get('/', function(request, response) {
//    console.log("The request object", request);
//    console.log("The response object", response);
//    response.send("cars.html");
// })
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');  

app.get("/cars", function(request, response) 
{
  response.render("cars");
});

app.get("/cats", function(request, response) 
{
  response.render("cats");
});

app.get("/maine", function (request, response){
  // hard-coded user data
  var maine_array = [
      {food: "Tuna", age: "5", sleep: "Couch"}
  ];
  response.render('maine', {maine: maine_array});
})

app.get("/serval", function (request, response){
  // hard-coded user data
  var serval_array = [
      {food: "Chicken", age: "3", sleep: "Tree"}
  ];
  response.render('serval', {serval: serval_array});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
