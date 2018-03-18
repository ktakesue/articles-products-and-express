const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
    extname: ".handlebars"
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { hello: "fuck" });
});

app.listen(PORT, () => {
  console.log("Server listening on 8000");
});
