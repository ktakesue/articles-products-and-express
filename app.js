const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const methodOverride = require("method-override");

const PORT = process.env.PORT || 8000;
const articles = require("./routes/articles.js");
const products = require("./routes/products.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine(
  ".hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("templates/default");
});

app.use("/articles", articles);
app.use("/products", products);

app.listen(PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`app listening on ${PORT}`);
  }
});
