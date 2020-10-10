var PORT =process.env.PORT ||3000;
const path = require('path');
const express = require('express');
const app = express();
 
const publicDirectoryPath = path.join(__dirname, '../public' );
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {
      
  });
})

app.get("/index", function(req, res){

  res.render("index"); 
});
app.get("/contact", function(req, res){

  res.render("contact"); 
});
app.get("/project", function(req, res){

  res.render("project"); 
});
app.get("/about", function(req, res){

  res.render("about"); 
});
app.get("/service", function(req, res){

  res.render("service"); 
});
app.listen(3000,() => {
    console.log("the server is running on port 3000");
})
