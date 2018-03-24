const express = require("express");
const router = express.Router();
const db = require("../db/DB_articles.js");

router
  .get("/", (req, res) => {
    const articles = db.getAllArticles();
    console.log("articles", articles);
    res.render("templates/articles/index", { articles });
  })
  .get("/:title", (req, res) => {
    const articles = db.getAllArticles();
    res.render("templates/articles/article", { articles });
  })
  .post("/", (req, res) => {
    let success = true;
    if (success === true) {
      success = db.createNewArticle(req.body);
      if (success === true) {
        res.redirect("/articles");
      }
    }
    res.render("templates/articles/new", { error: success });
  });

module.exports = router;
