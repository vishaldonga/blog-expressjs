const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//Handlebars Way
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//To serve default(will run index from public folder at localhost:3000)
app.use(express.static(path.join(__dirname, "static")));
app.use('/', require(path.join(__dirname, 'routes/blog')));

// app.get("/", (req, res) => {
//   res.sendFile()
// });

app.get("/about", (req, res) => {
  // res.send('Hello about!')
//   res.sendFile(path.join(__dirname, "index.html"));
//   res.status(500);
  res.json({"vishal":44}); //test
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
