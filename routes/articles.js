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
    const articleTitle = req.params.title;
    console.log("articleTitle", articleTitle);
    const article = db.getArticlebyTitle(articleTitle);
    console.log("article details", article);
    res.render("templates/articles/article", article);
  })
  .post("/", (req, res) => {
    let postStatus = true;
    if (postStatus === true) {
      postStatus = db.createNewArticle(req.body);
      if (postStatus === true) {
        res.redirect("/articles");
      }
    }
    res.render("templates/articles/new", { error: postStatus });
  })
  .put("/:title", (req, res) => {
    let putStatus = true;
    if (putStatus === true) {
      putStatus = db.editArticlebyTitle(req.body);
      if (putStatus === true) {
        res.redirect("templates/articles/article");
      }
    }
    res.render("templates/articles/edit", { error: putStatus });
  })
  .delete("/:title", (req, res) => {
    let deleteStatus = true;
    if (deleteStatus === true) {
      deleteStatus = db.deleteArticlebyTitle(req.params);
      if (deleteStatus === true) {
        res.redirect("/articles");
      }
    }
    res.render("templates/articles/article", { error: deleteStatus });
  });

module.exports = router;
